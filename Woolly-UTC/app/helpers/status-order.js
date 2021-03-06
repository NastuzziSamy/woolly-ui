import Ember from 'ember';
//
// export function statusOrder([value, ...rest]) {
//   if (value==="not_payed") return ` À payer`;
//   else if (value === "payed")  return ` Payé`;
//   else if (value === "awaiting_validation")  return `En cours de validation`;
//   else if (value === "validated")  return ` Payement validé`;
//   else return ` Payé`;
// }


export function statusOrder([value, ...rest]) {
  if (value==="not_payed") {
    return Ember.String.htmlSafe(`<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span> À payer`);
  }
  else if (value === "payed")   {
    return Ember.String.htmlSafe(`<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Payé`);
  }
  else if (value === "awaiting_validation") {
    return Ember.String.htmlSafe(`<span class="glyphicon glyphicon-retweet" aria-hidden="true"></span> Payé`);
  }
  else if (value === "validated") {
    return Ember.String.htmlSafe(`<span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Payé`);
  }
  else return ` Payé`;
}

export default Ember.Helper.helper(statusOrder);
