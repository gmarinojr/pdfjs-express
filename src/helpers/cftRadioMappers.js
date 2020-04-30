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
