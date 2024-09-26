const currentYear = new Date().getFullYear();

document.querySelector('footer p:first-of-type').textContent = `Copyright © ${currentYear}. | John Derek Kakraba Hagan | Kumasi, Ghana`;

const lastModifiedDate = document.lastModified;

document.querySelector('footer p:nth-of-type(2)').textContent = `Last modified: ${lastModifiedDate}`;
