import fetchJsonp from 'fetch-jsonp';

const MAILCHIMP_ENDPOINT = 'https://online.us20.list-manage.com/subscribe/post-json'

const MAILCHIMP_FORM_IDENTIFIERS = {
  id: 'd94c5e191e',
  u: '8139f4826471cfd00539f64b7'
}

const MAILCHIMP_FORM_FIELDS_MAPPER = {
  0: 'EMAIL',
  1: 'FNAME',
  2: 'LNAME',
  3: 'PROF',
  4: 'CITY',
  5: 'ADDPROF'
};

const createQueryFromParams = params => {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&')
}

const parseMailchimpMessage = msg => {
  const fieldNumber = parseInt(msg[0]);
  if (isNaN(fieldNumber)) {
    return { fieldName: null, content: msg }
  }
  return {
    fieldName: MAILCHIMP_FORM_FIELDS_MAPPER[fieldNumber],
    content: msg.substring(4)
  }
}

const postForm = async formData => {
  const query = createQueryFromParams({
    ...MAILCHIMP_FORM_IDENTIFIERS,
    ...formData
  })

  try {
    const response = await fetchJsonp(`${MAILCHIMP_ENDPOINT}?${query}`, { jsonpCallback: 'c' });
    const json = await response.json()
    return {
      result: json.result,
      message: parseMailchimpMessage(json.msg)
    }
  } catch (e) {
    return {
      result: 'error',
      message: {
        fieldName: null,
        content: 'Something went wrong, Please try again.'
      }
    }
  }
}

export default postForm;
