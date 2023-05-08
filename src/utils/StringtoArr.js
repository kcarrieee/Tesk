export default function split(string) {
     const arr = string.split(',')
                      .map(item => (item.trim()))
                        .filter(item => item !== '')
      return arr;
  }