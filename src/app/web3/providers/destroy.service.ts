import {Injectable, OnDestroy} from '@angular/core';
import {ReplaySubject} from 'rxjs';

/**
 * @note:
 * Observable abstraction over ngOnDestroy to use with takeUntil
 *
 * Why we use `ReplaySubject` instead of `Subject`?
 * Well, we’ll use ReplaySubject to emit the last message in case
 * the subscription is ended after the component is destroyed.
 * https://github.com/Tinkoff/taiga-ui/blob/main/projects/cdk/services/destroy.service.ts
 */
@Injectable()
export class DestroyService extends ReplaySubject<void> implements OnDestroy {
    constructor() {
        super(1);
    }

    ngOnDestroy(): void {
        this.next();
        this.complete();
    }
}

/* 
@Component({
     providers: [DestroyService]
  })
  export class MyComponent implements OnInit {
  
    constructor(
      @Self()
      private readonly destroy$: DestroyService
    ) {}
  
    private employee$: Observable<Employee> =
      this.employeeService.getEmployeeDetails();
  
    ngOnInit(): void {
      this.employee$.pipe(
        takeUntil(this.destroy$),
        tap(() => {
          // do something here
        })
      ).subscribe();
    }
  } */
  