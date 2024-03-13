function capitalizeTitle(title: string): string {
  return title
    .split(" ")
    .map((str) => {
      let s = str.toLowerCase();
      return s.length < 3 ? s : `${s.charAt(0).toUpperCase()}${s.substring(1)}`;
    })
    .join(" ");
}
