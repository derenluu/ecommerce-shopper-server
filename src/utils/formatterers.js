// License by trungquandev.com
// Simple method to Convert a String to Slug (more info: https://byby.dev/js-slugify-string)

export default slugify = (val) => {
  if (!val) return '';
  return String(val)
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
};

// >>> Example:
// const originalStringTest = 'Lorem Ipsum is simply dummy text of'
// const slug = slugify(originalStringTest)

// console.log('originalStringTest:', originalStringTest)
// console.log('slug:', slug)

// >>> Results:
// Original String Test: 'Lorem Ipsum is simply dummy text of'
// Slug Result: lorem-ipsum-is-simply-dummy-text-of
