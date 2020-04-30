export const jsonMapper = (json1, json2) => {
  const parsed = JSON.parse(json1);
  parsed.xfdf.fields.field.forEach((f) => {
    for(let key in json2) {
      let removedSpaces = f['@name'].replace(/\s+/g, '');
      // console.log(f['@name'])
      if(removedSpaces === key.toUpperCase()) {
        f.value = json2[key];
      } 

    }
  })
  console.log(parsed, 'check for herd number change');
  return parsed;
}