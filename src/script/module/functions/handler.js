export default function(key, ...flows) {
  return (e) => {
    const news = {};
    const value = flows.reduce((r, n) => n(r), e.target.value);
    news[key] = value;
    this.setState(news);
  };
}
