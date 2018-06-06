import { resetFakeAsyncZone, TestBed, inject } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { toObservable } from "@angular/forms/src/validators";
import { Observable } from "rxjs/Observable";
import { Injectable, Injector } from "@angular/core";
import { async, fakeAsync, tick, getTestBed } from "@angular/core/testing";
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  RequestOptions
} from "@angular/http";
import { Response, ResponseOptions } from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { Headers, HttpModule, XHRBackend, RequestMethod } from "@angular/http";
import { Hero } from "./dummy";
import { HttpClientModule } from "@angular/common/http";

fdescribe("HeroService", () => {
  let http: HttpClient;
  let mockBackend: MockBackend;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroService,
        HttpClient,
        MockBackend,
        BaseRequestOptions,
        //HttpClientModule,
        //HttpModule,

        {
          provide: HttpClient,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (
            backend: XHRBackend,
            defaultOptions: BaseRequestOptions
          ) => {
            return new Http(backend, defaultOptions);
          }
        }
      ]
    });
  }));

  it(
    "should try to make a Delete request to the proper URL",
    inject(
      [HeroService, MockBackend],
      fakeAsync((service: HeroService, backend: MockBackend) => {
        let mockUser: Hero = {
          name: "yes",
          id: 1,
          location: "karama",
          image: "image"
        };
        backend.connections.subscribe((connection: MockConnection) => {
          expect(connection.request.url).toBe(
            "http://localhost:8080/api/v1/delete/1"
          );
          expect(connection.request.method).toBe(RequestMethod.Delete);
          expect(connection.request.json()).toBe(null);
        });

        service.deleteHero(mockUser);
      })
    )
  );

  it(
    "should try to make a POST request to the proper URL",
    inject(
      [HeroService, MockBackend],
      fakeAsync((service: HeroService, backend: MockBackend) => {
        let mockUser: Hero = {
          name: "yes",
          id: 1,
          location: "karama",
          image: "image"
        };

        backend.connections.subscribe((connection: MockConnection) => {
          expect(connection.request.url).toBe(
            "http://localhost:8080/api/v1/restaurant"
          );
          expect(connection.request.method).toBe(RequestMethod.Post);
          expect(connection.request.json()).toBe(mockUser);
        });

        service.addHero(mockUser);
      })
    )
  );
  it(
    "should try to make a GET request to the proper URL",
    inject(
      [HeroService, MockBackend],
      fakeAsync((service: HeroService, backend: MockBackend) => {
        backend.connections.subscribe((connection: MockConnection) => {
          expect(connection.request.url).toBe(
            "http://localhost:8080/api/v1/getall/1"
          );
          expect(connection.request.method).toBe(RequestMethod.Get);
        });
        service.getHero(1);
      })
    )
  );
  it(
    "should try to make a PUT request to the proper URL",
    inject(
      [HeroService, MockBackend],
      fakeAsync((service: HeroService, backend: MockBackend) => {
        let mockUser: Hero = {
          name: "yes",
          id: 1,
          location: "karama",
          image: "image"
        };

        backend.connections.subscribe((connection: MockConnection) => {
          expect(connection.request.url).toBe(
            "http://localhost:8080/api/v1/update/1"
          );
          expect(connection.request.method).toBe(RequestMethod.Put);
          expect(connection.request.json()).toBe(mockUser);
        });
        service.updateHero(mockUser);
      })
    )
  );
});
//   it("should be created", async () => {
//     let heroService: HeroService;
//     heroService = new HeroService(http);
//     expect(heroService).toBeTruthy();
//   });
// });

//THIS IS FOR MAKING STUB CLASS
//providers[{provide:Service , useClass : YourStub}]