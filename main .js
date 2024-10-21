const content_file = "http://52.66.125.211/media/content/dummy_1.pdf";
let str="EventActivity/document26907952.jpeg"

// Split the URL by '/' to separate the path components
const pathComponents = content_file.split("/");

// Get the last component in the path, which should be the file name
const lastPathComponent = pathComponents[pathComponents.length - 1];

// Check if the last component ends with ".pdf"
if (lastPathComponent.endsWith(".pdf")) {
  // console.log("Last PDF file name:", lastPathComponent);
} else {
  // console.log("The URL does not point to a PDF file.");
}

function getFileName(data) {
  let name = "";
  const path = data.split("/");
  const lastPath = path[path.length - 1];
  if (lastPath.endsWith(".pdf")) {
    name = lastPath;
  } else {
    name = lastPath;
  }
  return name;
}
let sss="Circular/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg"
let res = getFileName(sss);
console.log(res);
{
}
let image = "fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg";

let file = {
  name: "fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg",
};

function isImageFile(file) {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
  const fileExtension = file.name
    .slice(file.name.lastIndexOf("."))
    .toLowerCase();
  // console.log(fileExtension);
  return imageExtensions.includes(fileExtension);
}
let res12 = isImageFile(file);
// console.log(res12);
let result=str.split('/')
let path=result[result.length-1]
console.log(result)
console.log(path)


// const duplicateIds = moduleList?.payload
//     ?.filter((obj1) => {
//       return editModuleList?.some((obj2) => obj2.id === obj1.id);
//     })
//     .map((obj) => obj.id);
// const nonDuplicateIds = moduleList?.payload
//     ?.filter((obj) => !duplicateIds?.includes(obj.id))
//     .map((obj) => obj.id);
// const nonUniqueElements = nonDuplicateIds?.filter(
//   (num) => !checkedIds?.includes(num)
// );