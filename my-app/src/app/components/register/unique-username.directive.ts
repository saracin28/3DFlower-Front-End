import {Directive} from "@angular/core";
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {HttpServiceService} from "../../services/http/http-service.service";
import {map} from "rxjs/operators";

@Directive({
  selector: '[uniqueUsername]',
  providers: [{provide: NG_ASYNC_VALIDATORS,
  useExisting: UniqueUsernameDirective,
  multi: true}]
})
export class UniqueUsernameDirective implements AsyncValidator{
  constructor(private httpService: HttpServiceService) {
  }
  validate(c: AbstractControl): Promise<ValidationErrors | null > | Observable<ValidationErrors | null>{
    return this.httpService.getUserByName(c.value).pipe(
      map(users => {
        return users && users.length >0 ? {'uniqueUsername': true} :null;
      })
    )
  }
}
