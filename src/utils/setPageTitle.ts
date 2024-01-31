import data from "@root/hoyl.json";

export default (title: string): void => {
  if (data.titleStartsWithName) {
    document.title = `${data.name} ${data.separator} ${title}`;
    return;
  }
  document.title = `${title} ${data.separator} ${data.name}`;
};
