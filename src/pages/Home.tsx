const Home = () => {
  return (
    <div className="page-container home-page">
      <div className="hero-section">
        <h1>用简单的笔墨，珍藏时光碎片。</h1>
        <p className="subtitle">
          欢迎来到“拾光笔记”，一个记录生活感悟的文字角落。
          <br />
          愿你在这里，能与不期而遇的温暖撞个满怀。
        </p>
      </div>

      <div className="recent-articles">
        <h2>近期文章</h2>
        <div className="article-preview">
          <h3>初春的清晨，与第一缕阳光相遇</h3>
          <p>当城市还在沉睡，我独自走在微凉的街道上，感受着季节更迭的温柔...</p>
        </div>
        <div className="article-preview">
          <h3>一本旧书，一段被遗忘的时光</h3>
          <p>在跳蚤市场的角落，我发现了一本泛黄的旧书。书页间的批注和折痕，仿佛在诉说着另一个人的故事...</p>
        </div>
      </div>
    </div>
  );
};

export default Home;