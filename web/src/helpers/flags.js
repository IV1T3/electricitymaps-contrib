import { DEFAULT_FLAG_SIZE } from '../helpers/constants';
import zonesConfig from '../config/zones.json';

const flagUri = function (countryCode, flagSize = DEFAULT_FLAG_SIZE) {
  if (!countryCode) {
    return undefined;
  }
  var zoneFlagFile = (zonesConfig[countryCode.toUpperCase()] || {}).flag_file_name;
  var flagFile = zoneFlagFile || `${countryCode.toLowerCase().split('-')[0]}.png`;
  return resolvePath(`images/flag-icons/flags_iso/${flagSize}/${flagFile}`);
};

export { flagUri };
