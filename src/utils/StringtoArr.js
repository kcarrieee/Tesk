export default function split(string) {
  if (Array.isArray(string)){
      return string;
    } else {
      const arr = string.split(',')
                      .map(item => (item.trim()))
                        .filter(item => item !== '')
      return arr;
    }
  }