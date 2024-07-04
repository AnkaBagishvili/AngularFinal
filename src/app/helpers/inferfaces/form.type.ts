import {
  FormArray,
  FormControl,
  FormGroup,
  UntypedFormArray,
} from '@angular/forms';

export interface Survey {
  email?: FormControl<string | null>;
  password?: FormControl<string | null>;
  fullName?: FormControl<string | null>;
  age?: FormControl<number | null>;
  address?: FormControl<string | null>;
  address2?: FormControl<string | null>;
  address3?: FormControl<string | null>;
  addressCity?: FormGroup<any>;
  contact?: FormGroup<any>;
  checkUser?: FormControl<boolean | null>;
  skills?: UntypedFormArray;
  requirements?: FormArray<FormGroup<RequirementGroup>>;
}

export interface RequirementGroup {
  addr1: FormControl<string | null>;
  addr2: FormControl<string | null>;
}

// ეს შესაცვლელი იქნება
