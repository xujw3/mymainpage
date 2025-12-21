const articlesData = [
  {
    id: 1,
    title: '初春的清晨，与第一缕阳光相遇',
    date: '2025年3月5日',
    summary: '当城市还在沉睡，我独自走在微凉的街道上，感受着季节更迭的温柔。那一刻，阳光穿透薄雾，洒在脸上，带来了无限的希望与宁静。',
  },
  {
    id: 2,
    title: '一本旧书，一段被遗忘的时光',
    date: '2025年2月18日',
    summary: '在跳蚤市场的角落，我发现了一本泛黄的旧书。书页间的批注和折痕，仿佛在诉说着另一个人的故事，让我与一段未曾谋面的过去产生了奇妙的共鸣。',
  },
  {
    id: 3,
    title: '关于“告别”的随想',
    date: '2025年1月22日',
    summary: '我们一生都在学习如何告别。告别一座城市，告别一段关系，告别过去的自己。每一次告别，都是为了更好地前行，即使心中仍有不舍。',
  },
  {
    id: 4,
    title: '雨后，漫步在青石板路上',
    date: '2024年12月10日',
    summary: '雨水洗净了天空和街道，空气中弥漫着泥土的芬芳。踩在湿润的青石板上，听着自己的脚步声，整个世界都变得缓慢而清晰。',
  },
];

const Articles = () => {
  return (
    <div className="page-container">
      <h1>文章</h1>
      <div className="article-list">
        {articlesData.map((article) => (
          <div key={article.id} className="article-item">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-meta">{article.date}</p>
            <p className="article-summary">{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;