export const certificationPayment = ({ paymentCertification}) => {
  if(paymentCertification === 'FedEmployee') {
    return 'id_5';
  } else {
    return 'id_23'
  }
}

export const reasonForTest = ({ testReason }) => {
  if (testReason === 'Area') {
    return 'id_1';
  } else if (testReason === 'HerdAccreditation') {
    return 'id_6';
  } else if (testReason === 'MilkOrdinance') {
    return 'id_7';
  } else if (testReason === 'SaleShow') {
    return 'id_8';
  } else if (testReason === 'AffectedHerd') {
    return 'id_9';
  } else if (testReason === 'Retest') {
    return 'id_10';
  } else if (testReason === 'TracingRegKill') {
    return 'id_11';
  } else if (testReason === 'TracingReactors') {
    return 'id_12';
  } else if (testReason === 'TracingExposed') {
    return 'id_13';
  } else if (testReason === 'Other') {
    return 'id_14';
  }
};

export const completeHerd = ({ wholeHerd }) => {
  if (wholeHerd === 'Y') {
    return 'id_2';
  } else if (wholeHerd === 'N') {
    return 'id_15';
  }
};

export const kindOfHerd = ({ tuberculosisHerd }) => {
  if (tuberculosisHerd === 'Deer') {
    return 'id_3';
  } else if (tuberculosisHerd === 'Elk') {
    return 'id_16';
  } else if (tuberculosisHerd === 'Bison') {
    return 'id_17';
  } else if (tuberculosisHerd === 'Cattle') {
    return 'id_18';
  } else if (tuberculosisHerd === 'Other') {
    return 'id_19';
  }
};

export const methodOfTest = ({ testMethod }) => {
  if (testMethod === 'CaudalFold') {
    return 'id_4';
  } else if (testMethod === 'Cervical') {
    return 'id_20';
  } else if (testMethod === 'SingleCervical') {
    return 'id_21';
  } else if (testMethod === 'Other') {
    return 'id_22';
  }
};
