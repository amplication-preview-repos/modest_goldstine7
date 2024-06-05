import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { UtilityBillController } from "../utilityBill.controller";
import { UtilityBillService } from "../utilityBill.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.42,
  billNumber: "exampleBillNumber",
  createdAt: new Date(),
  dueDate: new Date(),
  id: "exampleId",
  paid: "true",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amount: 42.42,
  billNumber: "exampleBillNumber",
  createdAt: new Date(),
  dueDate: new Date(),
  id: "exampleId",
  paid: "true",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amount: 42.42,
    billNumber: "exampleBillNumber",
    createdAt: new Date(),
    dueDate: new Date(),
    id: "exampleId",
    paid: "true",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amount: 42.42,
  billNumber: "exampleBillNumber",
  createdAt: new Date(),
  dueDate: new Date(),
  id: "exampleId",
  paid: "true",
  updatedAt: new Date(),
};

const service = {
  createUtilityBill() {
    return CREATE_RESULT;
  },
  utilityBills: () => FIND_MANY_RESULT,
  utilityBill: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("UtilityBill", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UtilityBillService,
          useValue: service,
        },
      ],
      controllers: [UtilityBillController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /utilityBills", async () => {
    await request(app.getHttpServer())
      .post("/utilityBills")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /utilityBills", async () => {
    await request(app.getHttpServer())
      .get("/utilityBills")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dueDate: FIND_MANY_RESULT[0].dueDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /utilityBills/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/utilityBills"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /utilityBills/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/utilityBills"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dueDate: FIND_ONE_RESULT.dueDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /utilityBills existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/utilityBills")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/utilityBills")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
