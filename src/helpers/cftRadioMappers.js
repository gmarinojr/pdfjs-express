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
