const addressExample = {
  buildingType: 'OTHERS',
  street: 'Russiiaa Romania Dyakia Street',
  street2: 'Vladymir Zelensky Russiiaa Romania Dyakia Street',
  subDistrict: 'Urrra Residence',
  district: 'Olesyuksyuksyuk District',
  city: 'Kyivikiran Kmoe City',
  province: 'Cyka Blyat',
  zipcode: '19223',
  cityCode: '190',
};

const getFullAddress = (address = {}) => {
  const fields = [
    'street',
    'buildingName',
    'officeFloor',
    'unitNo',
    'houseNo',
    'houseRtRw',
    'subDistrict',
    'district',
    'city',
    'province',
    'zipcode',
  ];
  const temporaryWords = [];

  fields.reduce((sentence, field) => {
    const word = address[String(field)] || '';
    const isValidWord = word && word !== '-' && word !== '0';

    if (isValidWord) {
      temporaryWords.push(word);
    }

    return temporaryWords;
  }, '');

  return temporaryWords;
};

const joinAddressWords = (words) => {
  const address1 = [];
  const address2 = [];
  const address3 = [];
  let length1 = 0;
  let length2 = 0;

  words.forEach((word) => {
    if (length1 + word.length <= 100) {
      address1.push(word);
      length1 += word.length;
    } else if (length2 + word.length <= 100) {
      address2.push(word);
      length2 += word.length;
    } else {
      address3.push(word);
    }
  });

  return [
    address1.join(', '),
    address2.join(', '),
    address3.join(', ').slice(0, 100),
  ];
};

const test = joinAddressWords(getFullAddress(addressExample));
console.log(test, getFullAddress(addressExample).length);
