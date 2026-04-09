const fs = require('fs');
const src = 'C:\\Users\\carfo\\.gemini\\antigravity\\brain\\a7fcbc96-e69d-452a-aeef-ea5b0ae5bdea\\media__1775731551147.jpg';
const dest = 'c:\\Users\\carfo\\OneDrive\\Escritorio\\Proyecto Forner Classics\\forner-classics\\public\\images\\hero-principal.jpg';

try {
    fs.copyFileSync(src, dest);
    console.log('Image copied successfully');
} catch (err) {
    console.error('Error copying image:', err);
}
