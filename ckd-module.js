(() => {
  const rail = document.querySelector('.rail');
  const main = document.querySelector('main');

  rail.innerHTML = `
    <div class="brand">
      <strong>宠医训练台</strong>
      <span>基础班样板模块</span>
    </div>

    <figure class="rail-visual">
      <img src="vet-companions.png" alt="一只金色幼犬与一只灰白虎斑猫并肩坐着">
    </figure>

    <div class="module-switch" aria-label="课程切换">
      <a href="index.html"><b>模块 01 · FLUTD</b>猫下泌尿道综合征</a>
      <a class="active" href="ckd.html"><b>模块 02 · CKD</b>猫慢性肾病</a>
      <a href="aki.html"><b>模块 03 · AKI</b>猫急性肾损伤</a>
    </div>

    <div class="progress-box">
      <div class="progress-top"><span>当前进度</span><b id="progressText">0%</b></div>
      <div class="meter"><span id="progressBar"></span></div>
    </div>

    <nav class="nav" aria-label="模块导航">
      <button class="active" data-jump="overview">学习笔记</button>
      <button data-jump="path">分期路径</button>
      <button data-jump="checklist">问诊体检</button>
      <button data-jump="labs">化验解读</button>
      <button data-jump="quiz">病例中心</button>
      <button data-jump="client">宠主模拟</button>
      <button data-jump="review">复盘</button>
    </nav>

    <div class="rail-note">本模块用于学习训练和产品验证，不替代真实病例中的诊断、处方、住院监护和上级医生判断。</div>
  `;

  main.innerHTML = `
    <section class="topbar">
      <div class="title-block">
        <div class="eyebrow">猫慢性肾病 CKD · 基础班</div>
        <h1>先确认慢性肾病，再做分期和长期管理</h1>
        <p class="lead">从多饮多尿、体重下降和肌酐升高出发，训练“诊断 CKD、排除可逆因素、IRIS 分期、血压与蛋白尿亚分期、并发症管理和长期复查”的完整思路。</p>
      </div>
      <div class="status-card">
        <b id="bestScore">未完成</b>
        <span>递进病例完成度</span>
      </div>
    </section>

    <section class="tabs" aria-label="内容分区">
      <button class="active" data-tab="overview">学习笔记</button>
      <button data-tab="path">分期路径</button>
      <button data-tab="checklist">问诊体检</button>
      <button data-tab="labs">化验解读</button>
      <button data-tab="quiz">病例中心</button>
      <button data-tab="client">宠主模拟</button>
      <button data-tab="review">复盘</button>
    </section>

    <section id="overview" class="panel active">
      <div class="lesson-grid">
        <article class="card note-stack">
          <div>
            <h2>系统学习笔记</h2>
            <p>这一页先建立 CKD 的完整框架。最重要的纪律是：肌酐或 SDMA 升高不等于已经诊断 CKD，IRIS 分期必须放在诊断之后。</p>
          </div>

          <section class="note-block definition">
            <h3>1. 什么是猫慢性肾病</h3>
            <p>CKD 是肾脏结构或功能异常持续存在并具有慢性特征的一组疾病状态。临床上可以表现为持续性肾性氮质血症、持续肾脏浓缩能力不足、肾脏影像或触诊异常、肾性蛋白尿，或肾指标长期上升趋势。</p>
            <p><b>CKD 是诊断，IRIS 1–4 期是诊断之后的严重程度描述。</b>不要用一次脱水状态下的肌酐结果直接给猫分期。</p>
          </section>

          <section class="note-block">
            <h3>2. 肾脏在做什么</h3>
            <div class="distinction-grid">
              <div class="distinction-card"><b>清除代谢废物</b><p>通过肾小球滤过和肾小管处理，维持尿素、肌酐等代谢产物的清除。</p></div>
              <div class="distinction-card"><b>调节水和电解质</b><p>决定尿液浓缩或稀释，参与钾、钠、磷和酸碱平衡。</p></div>
              <div class="distinction-card"><b>调节血压</b><p>通过容量和肾素-血管紧张素-醛固酮系统参与血压调节。</p></div>
              <div class="distinction-card"><b>内分泌功能</b><p>产生促红细胞生成素并参与维生素 D 代谢，因此晚期可出现贫血和矿物质骨代谢异常。</p></div>
            </div>
          </section>

          <section class="note-block danger-box">
            <h3>3. 先区分慢性、急性和可逆因素</h3>
            <table class="matrix">
              <thead><tr><th>方向</th><th>支持线索</th><th>新手提醒</th></tr></thead>
              <tbody>
                <tr><td>CKD</td><td>数周至数月体重下降、多饮多尿；肾脏小或形态异常；持续性肾指标异常；非再生性贫血</td><td>早期可以没有明显症状</td></tr>
                <tr><td>AKI</td><td>近期毒物/药物暴露、急性呕吐沉郁、少尿或无尿、肾脏疼痛或肿大、指标快速变化</td><td>AKI 也可能发生在 CKD 基础上</td></tr>
                <tr><td>肾前性氮质血症</td><td>脱水或低灌注；尿液仍有较强浓缩；纠正灌注后肾指标明显改善</td><td>不能在明显脱水时直接按 CKD 分期</td></tr>
                <tr><td>肾后性氮质血症</td><td>尿路阻塞或尿液渗漏证据</td><td>属于优先处理的可逆或急症因素</td></tr>
              </tbody>
            </table>
          </section>

          <section class="note-block">
            <h3>4. 常见临床表现和原因</h3>
            <div class="term-grid">
              <div class="term-card"><b>多饮多尿</b><span>肾脏浓缩能力下降后尿量增加，继发饮水增加；与 FLUTD 的“频繁但每次几滴”不同。</span></div>
              <div class="term-card"><b>体重和肌肉下降</b><span>可能早于明显氮质血症被主人发现，肌肉减少还会让肌酐低估肾功能下降。</span></div>
              <div class="term-card"><b>食欲下降、恶心、呕吐</b><span>更常见于进展期或尿毒症，但也要排除胃肠、胰腺和甲状腺等并发问题。</span></div>
              <div class="term-card"><b>脱水和便秘</b><span>浓缩能力不足使猫更容易失水，脱水又会使肾指标暂时升高。</span></div>
              <div class="term-card"><b>高血压相关表现</b><span>可能出现视网膜出血/脱离、突然失明、神经症状或心脏靶器官损害。</span></div>
              <div class="term-card"><b>苍白、虚弱</b><span>可能与 CKD 相关贫血、低钾、营养不足或其他疾病有关。</span></div>
            </div>
          </section>

          <section class="note-block">
            <h3>5. CKD 的诊断证据</h3>
            <p>早期 CKD 往往不能靠一个“超标值”确认。要把病史、连续趋势、尿液、影像和排除可逆因素放在一起。</p>
            <ul>
              <li>在稳定、充分水合状态下，肌酐和/或 SDMA 持续异常或呈进行性上升。</li>
              <li>尿比重持续不适当地偏低，并已排除非肾性多饮多尿原因。</li>
              <li>超声或 X 光提示肾脏大小、轮廓、结构或矿化异常。</li>
              <li>持续性肾性蛋白尿，已排除尿路炎症、出血和肾前性蛋白尿。</li>
              <li>早期病例可由持续 SDMA >14 µg/dL、异常影像或肾性蛋白尿等证据支持，但仍需结合完整临床背景。</li>
            </ul>
          </section>

          <section class="note-block">
            <h3>6. 2026 IRIS 猫 CKD 分期</h3>
            <p>分期在确诊 CKD 后进行，依据稳定、充分水合患者至少两次空腹肌酐和/或 SDMA。指标不一致时要考虑肌肉量、检测方法和复查趋势，持续不一致可按较高期管理。</p>
            <table class="matrix">
              <thead><tr><th>分期</th><th>肌酐 mg/dL</th><th>SDMA µg/dL</th><th>临床理解</th></tr></thead>
              <tbody>
                <tr><td>1 期</td><td>&lt;1.6</td><td>&lt;18</td><td>无氮质血症，但已有其他肾脏异常证据</td></tr>
                <tr><td>2 期</td><td>1.6–2.8</td><td>18–25</td><td>轻度氮质血症，症状可轻微或缺如</td></tr>
                <tr><td>3 期</td><td>2.9–5.0</td><td>26–38</td><td>中度氮质血症，肾外症状更常见</td></tr>
                <tr><td>4 期</td><td>&gt;5.0</td><td>&gt;38</td><td>尿毒症危象和明显全身症状风险增加</td></tr>
              </tbody>
            </table>
          </section>

          <section class="note-block">
            <h3>7. 亚分期：UPC 和收缩压</h3>
            <div class="distinction-grid">
              <div>
                <h4>蛋白尿亚分期</h4>
                <table class="matrix">
                  <thead><tr><th>猫 UPC</th><th>分类</th></tr></thead>
                  <tbody>
                    <tr><td>&lt;0.2</td><td>非蛋白尿</td></tr>
                    <tr><td>0.2–0.4</td><td>临界蛋白尿</td></tr>
                    <tr><td>&gt;0.4</td><td>蛋白尿</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4>血压亚分期</h4>
                <table class="matrix">
                  <thead><tr><th>收缩压 mmHg</th><th>靶器官损害风险</th></tr></thead>
                  <tbody>
                    <tr><td>&lt;140</td><td>正常 / 最低风险</td></tr>
                    <tr><td>140–159</td><td>高血压前期 / 低风险</td></tr>
                    <tr><td>160–179</td><td>高血压 / 中风险</td></tr>
                    <tr><td>≥180</td><td>严重高血压 / 高风险</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p>UPC 应在没有活动性尿路炎症或出血时解释，最好用至少两份、间隔至少 2 周的样本。血压要让猫适应环境并进行多次测量；存在眼、脑、心等靶器官损害时不能机械等待复测。</p>
          </section>

          <section class="note-block">
            <h3>8. 化验单不只看肌酐</h3>
            <table class="matrix">
              <thead><tr><th>项目</th><th>回答的问题</th><th>主要限制</th></tr></thead>
              <tbody>
                <tr><td>肌酐</td><td>反映肾小球滤过的替代指标并用于分期</td><td>受肌肉量、脱水和饮食影响；消瘦猫可能被低估</td></tr>
                <tr><td>SDMA</td><td>与肌酐互补，受肌肉量影响相对较小</td><td>不是 CKD 单项确诊试验，检测方法与非肾因素也要考虑</td></tr>
                <tr><td>尿比重</td><td>反映这份尿液的浓缩程度</td><td>要结合水合、药物、内分泌和其他多饮多尿病因</td></tr>
                <tr><td>磷、钙、钾、总 CO₂</td><td>寻找 CKD 矿物质、电解质和酸碱并发症</td><td>不能脱离分期、饮食和临床状态</td></tr>
                <tr><td>红细胞压积/血常规</td><td>识别贫血、炎症和其他并发问题</td><td>贫血原因不止 CKD，需排除失血、炎症和采血影响</td></tr>
              </tbody>
            </table>
          </section>

          <section class="note-block danger-box">
            <h3>9. 常见并发症和优先级</h3>
            <div class="cascade">
              <div class="cascade-step"><b>脱水与灌注下降</b><span>先纠正可逆因素，再解释肾指标和决定分期。</span></div>
              <div class="cascade-step"><b>高血压/蛋白尿</b><span>影响肾脏进展和眼、脑、心等靶器官风险。</span></div>
              <div class="cascade-step"><b>高磷、低钾、酸中毒</b><span>影响食欲、肌肉、骨矿物质代谢和生活质量。</span></div>
              <div class="cascade-step"><b>贫血和尿毒症症状</b><span>进展期更常见，治疗重点逐渐转向舒适度与营养。</span></div>
            </div>
          </section>

          <section class="note-block">
            <h3>10. 长期管理不是“把肌酐降下来”</h3>
            <ul>
              <li>寻找并处理肾前性、肾后性和可治疗的并发问题，如脱水、感染、尿路阻塞或肾盂肾炎线索。</li>
              <li>保证持续饮水和适当水分摄入，避免突然脱水。</li>
              <li>根据分期和个体情况讨论肾脏处方饮食、磷管理、钾和酸碱问题。</li>
              <li>测量血压与 UPC，处理持续高血压或蛋白尿时持续监测肾指标和反应。</li>
              <li>主动管理恶心、呕吐、食欲、体重和肌肉下降；进展期更重视生活质量。</li>
              <li>所有用药和液体方案均需结合水合、血压、肾功能和本院流程，由执业兽医决定。</li>
            </ul>
          </section>

          <section class="note-block">
            <h3>11. 复查时看趋势</h3>
            <div class="learning-map">
              <div class="map-step"><b>体重与肌肉</b><span>记录体重、体况和肌肉评分，避免只看化验单。</span></div>
              <div class="map-step"><b>水合与食欲</b><span>饮水、尿量、食欲、呕吐、便秘和活动度。</span></div>
              <div class="map-step"><b>肾指标趋势</b><span>肌酐、SDMA、尿比重和尿液变化。</span></div>
              <div class="map-step"><b>并发症</b><span>血压、UPC、磷钾、酸碱、贫血和尿培养指征。</span></div>
              <div class="map-step"><b>生活质量</b><span>治疗负担、喂药可行性、好日子与坏日子。</span></div>
            </div>
          </section>
        </article>

        <aside class="note-stack">
          <article class="card memory-box">
            <h2>记忆卡</h2>
            <p><b>一句话总纲：</b>先证明肾病具有慢性和持续性，再在稳定水合状态下分期，最后用血压和 UPC 亚分期。</p>
            <div class="tag-row"><span class="tag">诊断先于分期</span><span class="tag">看趋势</span><span class="tag warn">脱水会干扰</span><span class="tag danger">高血压靶器官</span></div>
          </article>
          <article class="card">
            <h2>新手最容易漏</h2>
            <ul>
              <li>看到一次肌酐升高就写 CKD 3 期。</li>
              <li>把尿频和多尿混为一谈。</li>
              <li>只看肌酐，不看肌肉量和 SDMA。</li>
              <li>在血尿或尿路炎症时直接用 UPC 亚分期。</li>
              <li>不测血压、不做眼底或靶器官风险评估。</li>
              <li>只追求化验数字，不记录食欲、体重和生活质量。</li>
            </ul>
          </article>
          <article class="card">
            <h2>宠主解释模板</h2>
            <p>这不是靠一次化验就能判断严重程度的疾病。我们需要先确认猫目前是否脱水、有没有感染或尿路阻塞等可逆问题，再结合稳定状态下的肾指标、尿液、影像、血压和尿蛋白进行分期。分期的目的不是贴标签，而是决定现在最需要管理什么以及多久复查。</p>
          </article>
          <article class="card">
            <h2>资料来源</h2>
            <ul class="source-list">
              <li>IRIS Staging of CKD，2026 修订版</li>
              <li>IRIS Treatment Recommendations for CKD in Cats，2026</li>
              <li>IRIS Pocket Guide to CKD，2026</li>
              <li>International Cat Care / ISFM：猫 CKD 相关资料</li>
            </ul>
          </article>
        </aside>
      </div>
    </section>

    <section id="path" class="panel">
      <article class="card">
        <h2>CKD 诊断与分期路径</h2>
        <p>这条路径刻意把“诊断”和“分期”分开。一次异常结果只能触发复核，不能自动跳到 IRIS 分期。</p>
        <div class="simple-flow">
          <div class="flow-card start">老年猫筛查异常 / 多饮多尿 / 体重下降 / 肾指标异常</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-card judge">先判断患者是否稳定、充分水合，并排除肾前性和肾后性因素</div>
          <div class="flow-split">
            <div class="flow-path urgent">
              <div class="flow-label">不稳定或有可逆因素</div>
              <div class="flow-card urgent">脱水、低灌注、尿路阻塞、毒物/AKI、感染等</div>
              <div class="flow-arrow">↓</div>
              <div class="flow-card">先处理和复查趋势，不立即做 CKD 分期</div>
            </div>
            <div class="flow-path check">
              <div class="flow-label">稳定且异常持续</div>
              <div class="flow-card check">病史 + 体检 + 肌酐/SDMA + 尿检 + 影像建立 CKD 诊断</div>
              <div class="flow-arrow">↓</div>
              <div class="flow-card">至少两次稳定状态指标用于 IRIS 分期</div>
            </div>
          </div>
          <div class="flow-arrow">↓</div>
          <div class="flow-card action">UPC 与血压亚分期 → 识别磷钾、酸碱、贫血和尿毒症症状 → 个体化管理与复查</div>
        </div>
      </article>
      <div class="grid two">
        <article class="card">
          <h2>诊断回答“是不是 CKD”</h2>
          <ul>
            <li>异常是否持续、是否具有慢性线索？</li>
            <li>患者是否脱水或低灌注？</li>
            <li>有没有阻塞、感染、毒物或 AKI 证据？</li>
            <li>尿比重、影像和指标趋势是否一致？</li>
          </ul>
        </article>
        <article class="card">
          <h2>分期回答“目前严重到什么程度”</h2>
          <ul>
            <li>稳定水合状态下的肌酐和 SDMA。</li>
            <li>UPC 亚分期必须先排除尿路炎症和出血。</li>
            <li>血压亚分期需要规范测量和靶器官评估。</li>
            <li>分期会随进展或治疗后状态变化而更新。</li>
          </ul>
        </article>
      </div>
    </section>

    <section id="checklist" class="panel">
      <div class="grid two">
        <article class="card">
          <h2>问诊优先级</h2>
          <div class="checklist">
            <label><input type="checkbox"> 多饮多尿从何时开始，尿团是变大还是次数变多但每次很少？</label>
            <label><input type="checkbox"> 体重、肌肉、食欲和活动度是否缓慢下降？</label>
            <label><input type="checkbox"> 是否呕吐、恶心、便秘、口臭或口腔溃疡？</label>
            <label><input type="checkbox"> 近期是否脱水、腹泻、停食、麻醉、用药或接触百合/毒物？</label>
            <label><input type="checkbox"> 既往肌酐、SDMA、尿比重、血压和体重趋势如何？</label>
            <label><input type="checkbox"> 是否有甲亢、糖尿病、心脏病、尿路感染或结石史？</label>
          </div>
        </article>
        <article class="card">
          <h2>体检优先级</h2>
          <div class="checklist">
            <label><input type="checkbox"> 精神、体重、体况评分和肌肉评分。</label>
            <label><input type="checkbox"> 水合、黏膜、毛细血管再充盈和循环状态。</label>
            <label><input type="checkbox"> 肾脏大小、形状、疼痛及膀胱状态。</label>
            <label><input type="checkbox"> 血压规范测量，必要时眼底和神经检查。</label>
            <label><input type="checkbox"> 口腔、口臭、溃疡、甲状腺和心脏听诊。</label>
            <label><input type="checkbox"> 苍白、虚弱和低钾相关颈部屈曲等并发症线索。</label>
          </div>
        </article>
      </div>
      <article class="card">
        <h2>正常/异常判断速查</h2>
        <table class="matrix">
          <thead><tr><th>项目</th><th>相对稳定线索</th><th>异常或升级信号</th><th>下一步</th></tr></thead>
          <tbody>
            <tr><td>水合</td><td>黏膜湿润、皮肤弹性与循环尚可</td><td>明显脱水、低灌注、虚弱</td><td>先纠正可逆因素，再解释肾指标</td></tr>
            <tr><td>尿量</td><td>多尿但持续排尿</td><td>少尿/无尿、突然尿量变化</td><td>排查 AKI、阻塞和容量状态</td></tr>
            <tr><td>血压</td><td>&lt;140 mmHg</td><td>持续 ≥160 或存在眼/脑等靶器官损害</td><td>规范复测并由医师制定管理</td></tr>
            <tr><td>体重肌肉</td><td>趋势稳定</td><td>持续下降、明显肌肉消耗</td><td>评估摄入、恶心、并发病和分期偏差</td></tr>
            <tr><td>食欲胃肠</td><td>进食稳定，无持续呕吐</td><td>拒食、反复呕吐、黑便、严重便秘</td><td>评估尿毒症及其他并发病，关注营养和生活质量</td></tr>
          </tbody>
        </table>
      </article>
    </section>

    <section id="labs" class="panel">
      <article class="card">
        <h2>CKD 化验报告：固定读单顺序</h2>
        <p>先看水合和时间趋势，再确认 CKD 证据；确诊后才分期，随后看 UPC、血压和并发症。</p>
        <div class="reading-order">
          <div class="reading-step"><strong>1. 状态</strong><span>稳定吗？脱水、休克、阻塞或急性病会不会干扰结果？</span></div>
          <div class="reading-step"><strong>2. 持续性</strong><span>一次异常还是至少两次趋势？是否有慢性病史和影像证据？</span></div>
          <div class="reading-step"><strong>3. 分期</strong><span>稳定水合状态下结合肌酐和 SDMA，不凭单项机械分期。</span></div>
          <div class="reading-step"><strong>4. 亚分期</strong><span>UPC 先排除尿路炎症；血压要规范重复并看靶器官。</span></div>
          <div class="reading-step"><strong>5. 并发症</strong><span>磷钙、钾、酸碱、贫血、尿培养指征、食欲和体重。</span></div>
        </div>
      </article>
      <div class="lab-grid">
        <article class="lab-card"><h3>肾功能替代指标</h3><ul><li>肌酐受肌肉量和脱水影响。</li><li>SDMA 与肌酐互补，不能脱离临床单独确诊。</li><li>BUN 还受饮食、分解代谢、胃肠出血和水合影响。</li></ul><div class="result-example">读法：先问“为什么升高”，再问“是否持续”，最后才问“属于哪一期”。</div></article>
        <article class="lab-card"><h3>尿液与蛋白尿</h3><ul><li>尿比重回答浓缩能力，不等于 CKD 分期。</li><li>尿沉渣用于排除感染、出血等 UPC 干扰。</li><li>UPC 要求可解释的样本和持续性。</li></ul><div class="result-example">读法：活动性血尿或脓尿时，不急着用 UPC 做肾性蛋白尿亚分期。</div></article>
        <article class="lab-card"><h3>并发症组合</h3><ul><li>磷和钙反映 CKD 矿物质代谢风险。</li><li>低钾可加重虚弱和食欲问题。</li><li>总 CO₂/碳酸氢根用于识别代谢性酸中毒。</li><li>PCV/HCT 评估贫血但要找其他原因。</li></ul><div class="result-example">读法：越到晚期，生活质量和并发症往往比单个肌酐数字更决定优先级。</div></article>
      </div>
      <article class="card">
        <h2>模拟化验报告实训</h2>
        <p>报告 A 练习稳定状态下完整分期，报告 B 练习避免把脱水性氮质血症误分为 CKD 3 期。</p>
        <div class="report-switch" role="tablist">
          <button class="active" data-ckd-report="ckdReportA">报告 A：稳定 CKD</button>
          <button data-ckd-report="ckdReportB">报告 B：脱水干扰</button>
        </div>
      </article>
      <section id="ckdReportA" class="report-case active">
        <article class="case-box"><b>报告 A：12 岁已绝育母猫</b><span>3 个月体重缓慢下降、多饮多尿。两次复查时均充分水合、状态稳定，结果相近；超声提示双肾慢性结构改变。</span></article>
        <div class="report-layout">
          <article class="report-sheet">
            <div class="report-head"><div><b>稳定状态复查</b><span>教学模拟数据</span></div><div><b>目标</b><span>分期 + 亚分期</span></div></div>
            <table class="report-table">
              <thead><tr><th>项目</th><th>结果</th><th>解释</th><th>标记</th></tr></thead>
              <tbody>
                <tr><td>CREA</td><td>2.1 mg/dL</td><td>猫 IRIS 2 期范围</td><td class="flag-high">H</td></tr>
                <tr><td>SDMA</td><td>22 µg/dL</td><td>猫 IRIS 2 期范围</td><td class="flag-high">H</td></tr>
                <tr><td>USG</td><td>1.018</td><td>持续浓缩不足</td><td class="flag-high">L</td></tr>
                <tr><td>UPC</td><td>0.18</td><td>无活动性沉渣</td><td class="flag-normal">非蛋白尿</td></tr>
                <tr><td>收缩压</td><td>148 mmHg</td><td>多次相近</td><td class="flag-high">高血压前期</td></tr>
                <tr><td>磷</td><td>4.3 mg/dL</td><td>结合分期与趋势</td><td class="flag-normal">—</td></tr>
                <tr><td>HCT</td><td>34%</td><td>30–45%</td><td class="flag-normal">—</td></tr>
              </tbody>
            </table>
          </article>
          <div class="lab-coach">
            <article class="lab-question" data-ckd-feedback="患者稳定、充分水合，异常持续并有慢性影像证据，因此可以进入 CKD 分期。肌酐 2.1 和 SDMA 22 均落在猫 IRIS 2 期范围。"><h3>1. 最合适的主分期是？</h3><div class="lab-options"><button class="lab-option" data-correct="true">IRIS CKD 2 期</button><button class="lab-option" data-correct="false">仅凭年龄判定 1 期</button><button class="lab-option" data-correct="false">因为肌酐升高就是 4 期</button></div><div class="lab-feedback"></div></article>
            <article class="lab-question" data-ckd-feedback="猫 UPC <0.2 属于非蛋白尿；148 mmHg 属于高血压前期/低靶器官风险。最终表述应包括主分期和两个亚分期。"><h3>2. 完整分类如何写？</h3><div class="lab-options"><button class="lab-option" data-correct="true">2 期，非蛋白尿，高血压前期</button><button class="lab-option" data-correct="false">2 期，蛋白尿，严重高血压</button><button class="lab-option" data-correct="false">尿比重 1.018，所以不能做任何分类</button></div><div class="lab-feedback"></div></article>
          </div>
        </div>
      </section>
      <section id="ckdReportB" class="report-case">
        <article class="case-box"><b>报告 B：10 岁已绝育公猫</b><span>急性呕吐腹泻 3 天，约 8% 脱水。入院 CREA 3.4 mg/dL、BUN 72 mg/dL，USG 1.050；纠正脱水并恢复进食后 CREA 降至 1.5 mg/dL。</span></article>
        <div class="report-layout">
          <article class="report-sheet">
            <div class="report-head"><div><b>入院与复查对照</b><span>教学模拟数据</span></div><div><b>目标</b><span>识别肾前性影响</span></div></div>
            <table class="report-table">
              <thead><tr><th>项目</th><th>入院</th><th>稳定后</th><th>意义</th></tr></thead>
              <tbody>
                <tr><td>水合</td><td>约 8% 脱水</td><td>恢复水合</td><td>入院结果受低灌注影响</td></tr>
                <tr><td>CREA</td><td>3.4 mg/dL</td><td>1.5 mg/dL</td><td>明显改善</td></tr>
                <tr><td>BUN</td><td>72 mg/dL</td><td>29 mg/dL</td><td>明显改善</td></tr>
                <tr><td>USG</td><td>1.050</td><td>1.038</td><td>保留浓缩反应</td></tr>
                <tr><td>影像</td><td colspan="2">未见明确慢性肾结构异常</td><td>缺少慢性证据</td></tr>
              </tbody>
            </table>
          </article>
          <div class="lab-coach">
            <article class="lab-question" data-ckd-feedback="入院时明显脱水，尿液浓缩，纠正水合后氮质血症基本消退，首先支持肾前性影响。不能用入院 CREA 3.4 直接写 CKD 3 期。"><h3>1. 入院时能否直接分为 CKD 3 期？</h3><div class="lab-options"><button class="lab-option" data-correct="false">可以，肌酐 3.4 足够</button><button class="lab-option" data-correct="true">不能，先纠正脱水并复查持续性</button><button class="lab-option" data-correct="false">不能，因为肌酐对猫没有意义</button></div><div class="lab-feedback"></div></article>
            <article class="lab-question" data-ckd-feedback="稳定后仍需结合后续趋势、尿液、SDMA 和影像判断是否存在早期 CKD，但当前证据不能支持按 CKD 3 期长期管理。"><h3>2. 下一步怎样表述更稳妥？</h3><div class="lab-options"><button class="lab-option" data-correct="true">肾前性氮质血症已明显改善，后续筛查是否合并早期 CKD</button><button class="lab-option" data-correct="false">已经治愈 CKD 3 期</button><button class="lab-option" data-correct="false">稳定后肌酐正常，所以永远无需复查</button></div><div class="lab-feedback"></div></article>
          </div>
        </div>
      </section>
    </section>

    <section id="quiz" class="panel">
      <article class="card">
        <h2>CKD 递进病例中心</h2>
        <p>四个病例分别训练早期诊断、脱水干扰、高血压/蛋白尿亚分期和进展期并发症。每例 7 个连续决策，共 28 个节点。</p>
        <div id="caseLibrary" class="case-library"></div>
      </article>
      <div id="caseStagebar" class="case-stagebar"></div>
      <div class="case-workspace">
        <article class="card case-main">
          <div class="case-heading"><div><h2 id="caseTitle"></h2><p id="caseObjective"></p></div><span id="caseCounter" class="case-counter"></span></div>
          <div class="case-box"><b id="caseStageTitle"></b><span id="caseStem"></span></div>
          <div id="stageLabel" class="stage-label"></div>
          <h3 id="questionText" class="case-question"></h3>
          <div id="choices" class="choices"></div>
          <div id="feedback" class="feedback" aria-live="polite"></div>
          <div class="actions"><button id="nextQuestion" class="primary" disabled>进入下一阶段</button><button id="resetQuiz" class="secondary">重新训练本病例</button></div>
          <section id="caseComplete" class="case-complete-box"><h3>病例完成</h3><p id="caseCompleteText"></p><div id="caseResultGrid" class="case-result-grid"></div><div class="actions"><button id="nextCase" class="primary">进入下一病例</button></div></section>
        </article>
        <aside class="case-record">
          <div class="record-head"><b id="recordPatient">患者记录</b><span id="recordMeta"></span></div>
          <section class="record-section"><h3>已知病史</h3><div id="historyRecord" class="record-list"></div></section>
          <section class="record-section"><h3>体检发现</h3><div id="examRecord" class="record-list"></div></section>
          <section class="record-section"><h3>检查结果</h3><div id="testRecord" class="record-list"></div></section>
          <section class="record-section"><h3>当前判断</h3><div id="assessmentRecord" class="record-list"></div></section>
          <section class="record-section"><div id="caseObjectiveCard" class="case-objective"></div><div class="score-item"><span>当前得分 <b id="liveScore">0/7</b></span><div class="score-line"><span id="quizMeter"></span></div></div><p id="coachTip" class="disclaimer"></p></section>
        </aside>
      </div>
    </section>

    <section id="client" class="panel">
      <div class="chat-shell">
        <article class="card">
          <h2>宠主沟通模拟</h2>
          <div class="chat-log" id="chatLog"><div class="bubble owner">医生，网上说我家猫肌酐 2.2 就是肾衰了，是不是已经很严重？它现在还能吃，我想先买点“降肌酐”的药，不做其他检查可以吗？</div></div>
          <textarea id="doctorReply" placeholder="解释：为什么一次肌酐不能完整诊断和分期、还需要哪些检查、分期的目的是什么。"></textarea>
          <div class="actions"><button id="scoreReply" class="primary">提交沟通</button><button id="resetChat" class="secondary">重置模拟</button></div>
        </article>
        <aside class="coach"><h3>评分维度</h3><div id="commScore"><p>提交后从诊断边界、检查解释、同理心和长期计划四个维度给反馈。</p></div></aside>
      </div>
    </section>

    <section id="review" class="panel">
      <div class="grid two">
        <article class="card"><h2>基础班复盘题</h2><ul><li>为什么一次肌酐升高不能直接给猫做 IRIS 分期？</li><li>肌酐与 SDMA 不一致时，你会先检查什么？</li><li>什么时候 UPC 暂时不适合用于肾性蛋白尿亚分期？</li><li>高血压为什么需要同时关注眼、脑、心等靶器官？</li><li>为什么进展期 CKD 的优先级会越来越偏向生活质量？</li></ul></article>
        <article class="card"><h2>产品体验观察点</h2><ul><li>诊断与分期是否真正区分开？</li><li>数值表格是否足够清楚又不过度依赖死记？</li><li>病例是否能训练趋势判断和可逆因素排查？</li><li>宠主沟通是否贴近慢病长期管理压力？</li></ul></article>
      </div>
      <article class="card"><h2>下一版可增加</h2><div class="tag-row"><span class="tag">复查趋势图</span><span class="tag">饮食转换记录</span><span class="tag">血压测量模拟</span><span class="tag">生活质量量表</span><span class="tag">SOAP 复盘报告</span></div><p class="disclaimer">内容提示：真实 CKD 管理应根据患者水合、分期、并发症、药物可获得性和医院规范个体化实施。</p></article>
    </section>
  `;

  const trainingCases = [
    {
      id: 'early',
      title: '病例 1 · 早期 CKD',
      short: '从筛查异常到完整分期',
      level: '基础',
      levelClass: '',
      patient: '小满 · 家猫 · 12 岁 · 已绝育母猫',
      objective: '训练目标：识别多饮多尿和肌肉下降，建立持续性 CKD 证据，并完成主分期与亚分期。',
      summary: {
        focus: '诊断先于分期，趋势优于单点',
        trap: '只凭一次肌酐或年龄写 CKD',
        transfer: '老年猫筛查要同时记录体重、肌肉、尿液、血压和影像'
      },
      stages: [
        {
          phase: '主诉判断',
          title: '老年猫筛查主诉',
          stem: '主人发现小满近 3 个月喝水变多、猫砂盆里的尿团变大，体重从 4.6 kg 降到 4.2 kg，但没有频繁蹲盆或排尿疼痛。',
          question: '首先应怎样描述这个问题？',
          choices: [['更像多饮多尿伴体重下降，需要评估肾脏及其他系统性病因', true], ['这是 FLUTD 尿频，可以直接按膀胱炎处理', false], ['老年猫体重下降属于正常衰老', false]],
          feedback: '尿团变大提示总尿量增加，与每次几滴的尿频不同。CKD 是重要鉴别，但甲亢、糖尿病和其他多饮多尿病因也要考虑。',
          tip: '先分清多尿和尿频，再决定诊断路径。',
          reveal: { history: ['3 个月多饮，尿团变大', '体重由 4.6 kg 降至 4.2 kg', '无尿痛和频繁蹲盆'] }
        },
        {
          phase: '重点问诊',
          title: '建立慢性时间线',
          stem: '小满食欲略下降，无急性呕吐腹泻。既往无尿闭，最近没有麻醉或已知毒物接触，未长期使用可能影响肾脏的药物。',
          question: '下一组问诊重点最有价值的是？',
          choices: [['既往体重、肌酐/SDMA/尿比重趋势，饮食饮水、用药毒物及甲亢/糖尿病线索', true], ['只问猫粮口味，不需要既往化验', false], ['只要多饮就能确诊 CKD', false]],
          feedback: 'CKD 需要持续性和慢性证据。既往趋势、药物毒物、系统性疾病和饮食水分信息会改变判断。',
          tip: '慢病问诊最重要的是时间线和旧数据。',
          reveal: { history: ['食欲轻度下降', '无急性胃肠道病史', '无近期已知毒物、麻醉或肾毒性用药暴露'] }
        },
        {
          phase: '体检分层',
          title: '体检发现',
          stem: '小满精神尚可，充分水合；BCS 5/9，肌肉评分轻度下降。双肾触诊偏小、轮廓略不规则，无明显疼痛，膀胱可排空。',
          question: '哪项解释最合理？',
          choices: [['小肾、轮廓异常和肌肉下降支持慢性过程，但仍需实验室与影像确认', true], ['肾脏不痛即可排除 CKD', false], ['肌肉下降会让肌酐虚高，因此不用看 SDMA', false]],
          feedback: '慢性肾结构改变和肌肉下降是重要线索。肌肉减少通常可能使肌酐低估滤过下降，因此更需要结合 SDMA 和趋势。',
          tip: '体检不仅看脱水，也要记录肌肉和肾脏形态。',
          reveal: { exam: ['充分水合，精神尚可', '轻度肌肉下降', '双肾偏小、轮廓略不规则', '膀胱可排空'] }
        },
        {
          phase: '检查选择',
          title: '完整基础数据库',
          stem: '你需要同时回答“是否 CKD、是否有其他病因、是否存在并发症”。',
          question: '哪组检查最完整？',
          choices: [['CBC、生化/电解质、肌酐与 SDMA、完整尿检、血压、UPC 条件评估、T4 和肾脏影像', true], ['只做肌酐，超过参考区间就结束', false], ['只做腹部 X 光，正常就排除 CKD', false]],
          feedback: 'CKD 是综合诊断。尿沉渣决定培养或 UPC 是否可解释，T4 等检查用于排除并发病，血压和影像不能省略。',
          tip: '老年猫 CKD 评估要同时看肾功能、尿液、结构和并发症。',
          reveal: { tests: ['计划 CBC、生化、电解质、肌酐和 SDMA', '计划完整尿检、血压和 UPC 条件评估', '计划 T4 与肾脏影像'] }
        },
        {
          phase: '报告解读',
          title: '确认持续性',
          stem: '两次稳定水合状态复查：CREA 2.0–2.1 mg/dL，SDMA 21–22 µg/dL，USG 1.018–1.020；超声见双肾偏小和皮髓质结构改变。T4 与血糖未支持甲亢或糖尿病。',
          question: '当前证据最支持什么？',
          choices: [['存在持续肾功能和浓缩异常并有慢性影像证据，支持 CKD 诊断', true], ['尿比重低就能单独确诊任何阶段 CKD', false], ['肌酐只有轻度升高，所以肾脏一定正常', false]],
          feedback: '持续性指标、浓缩不足和慢性结构改变相互支持，可以在排除可逆因素后建立 CKD 诊断。',
          tip: '多个独立证据方向一致，比单项标红更可靠。',
          reveal: { tests: ['两次 CREA 2.0–2.1 mg/dL', '两次 SDMA 21–22 µg/dL', 'USG 1.018–1.020', '超声提示双肾慢性结构改变'] }
        },
        {
          phase: '工作诊断',
          title: '分期与亚分期',
          stem: '尿沉渣无活动性炎症，UPC 0.18；规范多次收缩压约 150 mmHg。',
          question: '完整分类如何写？',
          choices: [['IRIS CKD 2 期，非蛋白尿，高血压前期', true], ['IRIS CKD 3 期，蛋白尿，严重高血压', false], ['只能写肾衰竭，不能进一步分类', false]],
          feedback: '猫 CREA 1.6–2.8、SDMA 18–25 对应 2 期；UPC <0.2 为非蛋白尿；收缩压 140–159 为高血压前期。',
          tip: '标准病历要写“主分期 + UPC 亚分期 + 血压亚分期”。',
          reveal: { assessment: ['确诊 CKD', 'IRIS 2 期', '非蛋白尿', '高血压前期'] }
        },
        {
          phase: '沟通管理',
          title: '长期计划沟通',
          stem: '主人问：“它现在还挺正常，是不是等肌酐高了再治？”',
          question: '哪种解释最合适？',
          choices: [['早期症状可轻，但现在正适合通过饮食、水分、并发症监测和定期趋势复查延缓进展并维持生活质量', true], ['没有呕吐就不需要任何管理', false], ['目标是用一种药把肌酐永久降回正常', false]],
          feedback: '早期管理重点是减慢进展、避免脱水和肾毒性、监测血压/蛋白尿/磷钾，并让饮食变化可接受和可持续。',
          tip: '慢病沟通要把“没症状”转化为“有机会早管理”。',
          reveal: { assessment: ['管理目标：减慢进展并维持生活质量', '持续记录体重、食欲、水合和实验室趋势', '定期复查血压、UPC 与并发症'] }
        }
      ]
    },
    {
      id: 'prerenal',
      title: '病例 2 · 脱水干扰',
      short: '肾前性氮质血症与错误分期',
      level: '纠偏',
      levelClass: 'analysis',
      patient: '阿布 · 家猫 · 10 岁 · 已绝育公猫',
      objective: '训练目标：识别脱水对肌酐和 BUN 的影响，先纠正可逆因素，再判断是否存在持续肾病。',
      summary: {
        focus: '分期必须在稳定、充分水合状态下',
        trap: '看到 CREA 3.4 立即写 CKD 3 期',
        transfer: '任何氮质血症先按肾前性、肾性和肾后性整理证据'
      },
      stages: [
        {
          phase: '主诉判断',
          title: '急性胃肠道主诉',
          stem: '阿布急性呕吐、腹泻 3 天，几乎不进食，今天明显虚弱。此前没有持续多饮多尿和体重下降史。',
          question: '当前肾指标异常最需要先考虑什么干扰？',
          choices: [['脱水和低灌注造成的肾前性氮质血症', true], ['只要 10 岁就默认 CKD', false], ['腹泻与肾脏指标无关', false]],
          feedback: '急性液体丢失和摄入不足可以降低肾灌注，使 BUN/肌酐升高。先判断容量状态，不能从年龄直接推断 CKD。',
          tip: '先看病程是急还是慢，再看数字。',
          reveal: { history: ['急性呕吐腹泻 3 天', '进食饮水明显减少', '此前无明确慢性多饮多尿或消瘦'] }
        },
        {
          phase: '重点问诊',
          title: '排查急性与肾后性因素',
          stem: '主人否认百合、清洁剂或人药接触；阿布仍有正常大小尿团，无排尿困难。近期未麻醉或使用 NSAIDs。',
          question: '这组信息的主要价值是什么？',
          choices: [['降低部分毒物和尿路阻塞可能，但仍需体检、尿检和趋势验证', true], ['已经完全排除 AKI 和所有毒物', false], ['只要有尿就能排除所有肾脏疾病', false]],
          feedback: '阴性病史可以调整概率，但不能替代检查。排尿存在使完全阻塞可能性下降，仍需结合膀胱、肾脏和尿液。',
          tip: '阴性病史是证据的一部分，不是绝对排除。',
          reveal: { history: ['无已知毒物或近期肾毒性用药暴露', '仍有正常大小尿团', '无排尿困难'] }
        },
        {
          phase: '体检分层',
          title: '容量状态',
          stem: '阿布沉郁，约 8% 脱水，黏膜干、皮肤弹性下降，心率偏快；膀胱中等可排空，肾脏无明显疼痛。',
          question: '最优先的临床判断是？',
          choices: [['明显脱水可解释至少部分氮质血症，需先稳定并监测反应', true], ['脱水不会影响肌酐', false], ['膀胱可排空即可直接分 CKD 期', false]],
          feedback: '容量不足是明确的可逆因素。稳定前的肌酐可以用于急症判断，但不适合直接做 CKD 分期。',
          tip: '分期前先问：这只猫现在稳定、充分水合吗？',
          reveal: { exam: ['约 8% 脱水', '黏膜干、皮肤弹性下降', '膀胱可排空', '肾脏无明显疼痛'] }
        },
        {
          phase: '检查选择',
          title: '入院检查与复查计划',
          stem: '入院 CREA 3.4 mg/dL、BUN 72 mg/dL。你需要判断肾前性、肾性或混合问题。',
          question: '下一步最合理的是？',
          choices: [['完整尿检和电解质，评估灌注并按医师方案纠正脱水，随后复查肾指标和尿量趋势', true], ['立即写 CKD 3 期并不再复查', false], ['只看 BUN，不需要尿比重', false]],
          feedback: '尿比重、尿沉渣、尿量和对补液/恢复灌注的反应共同帮助定位氮质血症。',
          tip: '诊断不是猜来源，而是设计能区分来源的复查。',
          reveal: { tests: ['入院 CREA 3.4 mg/dL，BUN 72 mg/dL', '计划完整尿检、电解质和尿量监测', '稳定后复查肾指标'] }
        },
        {
          phase: '报告解读',
          title: '稳定前后对照',
          stem: '入院 USG 1.050。纠正脱水并恢复进食后，CREA 降至 1.5 mg/dL、BUN 29 mg/dL，USG 1.038；影像未见明确慢性肾结构异常。',
          question: '这组变化最支持什么？',
          choices: [['肾前性氮质血症占主要部分，入院值不能用于 CKD 3 期分期', true], ['治疗把 CKD 3 期彻底治愈了', false], ['USG 高证明肾脏永远不会患病', false]],
          feedback: '强浓缩尿和纠正容量后指标显著改善支持肾前性影响。是否合并早期 CKD 仍需在恢复后结合趋势筛查。',
          tip: '动态反应本身就是诊断证据。',
          reveal: { tests: ['入院 USG 1.050', '稳定后 CREA 1.5、BUN 29 mg/dL', '稳定后 USG 1.038', '影像无明确慢性结构改变'] }
        },
        {
          phase: '工作诊断',
          title: '保留诊断边界',
          stem: '阿布临床恢复，肾指标基本回到参考范围。主人追问是不是没有任何肾脏问题。',
          question: '病历最合适的结论是？',
          choices: [['急性脱水相关肾前性氮质血症已改善；恢复后按老年猫筛查计划复查是否合并早期 CKD', true], ['CKD 3 期已治愈', false], ['一次恢复正常即可保证终生没有 CKD', false]],
          feedback: '当前不能支持 CKD 3 期，也不能用一次恢复值排除未来或早期 CKD。保留后续趋势计划最严谨。',
          tip: '正确结论既不能过诊断，也不能过度保证。',
          reveal: { assessment: ['肾前性氮质血症已明显改善', '当前证据不支持 CKD 3 期', '恢复后继续老年猫肾脏趋势筛查'] }
        },
        {
          phase: '沟通管理',
          title: '解释“假性分期”',
          stem: '主人问：“那最开始医生说肾指标很高，是不是误诊？”',
          question: '哪种解释最好？',
          choices: [['入院高值真实反映当时脱水和低灌注风险，但不能直接代表稳定状态 CKD 分期；复查变化帮助我们找到主要原因', true], ['第一次化验完全没有价值', false], ['以后再高也都当脱水，不用评估肾脏', false]],
          feedback: '要区分“检测结果真实”与“解释是否越界”。入院值指导急症，稳定后值用于判断持续肾病。',
          tip: '向主人解释为什么同一个数字在不同状态下意义不同。',
          reveal: { assessment: ['急症指标用于当时风险评估', '稳定状态复查用于 CKD 诊断与分期'] }
        }
      ]
    },
    {
      id: 'hypertension',
      title: '病例 3 · 高血压与蛋白尿',
      short: '亚分期和靶器官损害',
      level: '靶器官',
      levelClass: 'urgent',
      patient: '奶盖 · 家猫 · 14 岁 · 已绝育母猫',
      objective: '训练目标：规范解释血压与 UPC，识别视网膜靶器官损害，并理解亚分期会改变管理优先级。',
      summary: {
        focus: 'CKD 分期相同，并发风险可以完全不同',
        trap: '只盯肌酐，忽略失明和持续蛋白尿',
        transfer: '血压与 UPC 是 CKD 基础评估，不是可有可无的附加项'
      },
      stages: [
        {
          phase: '主诉判断',
          title: '突然看不见',
          stem: '奶盖已确诊 CKD 2 期，今天突然撞家具、瞳孔散大。主人认为可能只是老年视力退化。',
          question: '最应优先怀疑什么？',
          choices: [['高血压相关眼部靶器官损害，需要立即评估', true], ['CKD 只影响肾脏，与眼睛无关', false], ['先回家观察一个月', false]],
          feedback: 'CKD 猫突然失明要高度警惕系统性高血压导致视网膜出血或脱离，属于需要快速评估的靶器官问题。',
          tip: 'CKD 的危险不只写在肾指标上。',
          reveal: { history: ['既往确诊 CKD 2 期', '今日突然撞家具、瞳孔散大', '疑似急性视力丧失'] }
        },
        {
          phase: '重点问诊',
          title: '血压和治疗史',
          stem: '奶盖过去半年没有规律测血压。最近喝水增多，但无呕吐；未使用降压或抗蛋白尿药物。',
          question: '还需要快速补问什么？',
          choices: [['症状起始、神经表现、既往血压、甲亢/心脏病和用药依从性', true], ['只问猫砂品牌', false], ['既然已知 CKD，不需要再问并发病', false]],
          feedback: '高血压可伴眼、脑、心脏和肾脏靶器官损害，也可能与甲亢等疾病并存。',
          tip: '突然失明时，问诊要同时覆盖眼、脑、心和内分泌。',
          reveal: { history: ['半年未规律测血压', '未接受降压或抗蛋白尿管理', '无持续呕吐'] }
        },
        {
          phase: '体检分层',
          title: '规范测压与眼底',
          stem: '让猫安静适应后多次收缩压 205–215 mmHg；眼底见双侧视网膜出血和脱离。心率快但节律规则。',
          question: '是否需要等待 1–2 周证明血压持续升高？',
          choices: [['不应机械等待，严重高血压并已有靶器官损害，需要立即由医师管理', true], ['必须等两周，否则不能处理', false], ['眼底损害与血压无关', false]],
          feedback: '通常高血压需规范重复确认，但存在明确靶器官损害时不应为了证明持续性而延误管理。',
          tip: '测量规范重要，但不能压过已经出现的靶器官证据。',
          reveal: { exam: ['多次收缩压 205–215 mmHg', '双侧视网膜出血和脱离', '心率快、节律规则'] }
        },
        {
          phase: '检查选择',
          title: '补全并发症评估',
          stem: '除眼底和血压外，需要复核肾功能、尿蛋白和并发病。',
          question: '哪组检查最合理？',
          choices: [['稳定状态肾指标、电解质、完整尿检后 UPC、T4，并评估心脏和神经靶器官', true], ['只复查肌酐，其他都不影响', false], ['直接用尿试纸蛋白代替 UPC', false]],
          feedback: 'UPC 必须在尿沉渣可解释时定量；甲亢等并发病可能影响血压，降压管理后还要监测肾指标。',
          tip: '高血压病例要同时找原因、靶器官和治疗监测基线。',
          reveal: { tests: ['计划稳定状态肾指标与电解质', '完整尿检后评估 UPC', '复核 T4 和其他靶器官'] }
        },
        {
          phase: '报告解读',
          title: '主分期与亚分期',
          stem: 'CREA 2.3 mg/dL，SDMA 24 µg/dL；尿沉渣安静，UPC 两次分别为 0.68 和 0.72；T4 未升高。',
          question: '完整分类最合适的是？',
          choices: [['IRIS CKD 2 期，蛋白尿，严重高血压并有眼部靶器官损害', true], ['2 期，非蛋白尿，血压正常', false], ['4 期，因为已经失明', false]],
          feedback: '主分期仍由稳定肾指标决定；UPC >0.4 为蛋白尿；收缩压 ≥180 为严重高血压，眼底损害提高当前紧迫性。',
          tip: '主分期不因失明改变，但亚分期和优先级会改变。',
          reveal: { tests: ['CREA 2.3 mg/dL，SDMA 24 µg/dL', '尿沉渣安静', 'UPC 0.68–0.72，持续蛋白尿', 'T4 未升高'] }
        },
        {
          phase: '工作诊断',
          title: '确定优先级',
          stem: '奶盖分期仍为 CKD 2 期，但并发症风险很高。',
          question: '当前问题清单首位是什么？',
          choices: [['严重系统性高血压伴视网膜靶器官损害，同时存在持续肾性蛋白尿', true], ['只记录 CKD 2 期即可', false], ['先等肌酐升到 3 期再处理血压', false]],
          feedback: '亚分期不是附属信息。严重高血压和靶器官损害会立即改变管理顺序，持续蛋白尿影响进展风险。',
          tip: '问题清单按危险和可干预程度排序，不按化验单顺序抄。',
          reveal: { assessment: ['CKD 2 期', '持续蛋白尿', '严重系统性高血压', '眼部靶器官损害'] }
        },
        {
          phase: '沟通管理',
          title: '长期降压沟通',
          stem: '主人问：“眼睛看不见才是问题，血压降下来后药能停吗？”',
          question: '哪种解释最合适？',
          choices: [['高血压通常需要长期管理和复查，目标是减少进一步眼、脑、心、肾损害，并监测低血压和肾指标变化', true], ['视力问题处理后血压就不用再测', false], ['药物越快把血压降得越低越好', false]],
          feedback: '降压追求逐步、持续和可监测，避免突然低血压。CKD、UPC 和血压需要长期一起复查。',
          tip: '沟通要把看得见的失明与看不见的全身靶器官风险连接起来。',
          reveal: { assessment: ['长期目标：降低靶器官损害风险', '持续监测血压、肾指标、UPC 和低血压表现'] }
        }
      ]
    },
    {
      id: 'advanced',
      title: '病例 4 · 进展期 CKD',
      short: '并发症与生活质量',
      level: '进展期',
      levelClass: 'infection',
      patient: '年糕 · 家猫 · 15 岁 · 已绝育公猫',
      objective: '训练目标：在 CKD 3 期中同时识别脱水、高磷、低钾、酸中毒、贫血和尿毒症症状，并安排现实可行的优先级。',
      summary: {
        focus: '进展期管理越来越以症状和生活质量为中心',
        trap: '只追求降低肌酐，忽略营养、贫血和治疗负担',
        transfer: '复杂慢病要分层处理并与主人共同制定可执行计划'
      },
      stages: [
        {
          phase: '主诉判断',
          title: '进展期主诉',
          stem: '年糕已知 CKD，近 2 周食欲明显下降、间歇呕吐、体重和肌肉继续减少，喝水多但仍容易脱水。',
          question: '当前最重要的思路是？',
          choices: [['评估 CKD 进展和多种可治疗并发症，同时关注营养与生活质量', true], ['只复查肌酐，其他症状不重要', false], ['老年猫不吃属于正常，无需干预', false]],
          feedback: '进展期 CKD 常出现多种肾外症状。恶心、食欲、脱水、贫血、电解质和酸碱都可能影响生活质量。',
          tip: '进展期不是一个数字，而是一组需要排序的问题。',
          reveal: { history: ['已知 CKD', '2 周食欲下降和间歇呕吐', '持续体重与肌肉减少', '多饮但容易脱水'] }
        },
        {
          phase: '重点问诊',
          title: '生活质量与可执行性',
          stem: '主人每天喂药困难，年糕对新食物非常抗拒。最近好日子减少，但仍会主动互动。',
          question: '哪项问诊最有价值？',
          choices: [['记录摄入量、呕吐/恶心、排便、活动、好坏日比例以及主人能承担的治疗操作', true], ['只问主人预算，不讨论治疗负担', false], ['只要还能互动就无需评估生活质量', false]],
          feedback: '复杂慢病计划必须既医学合理又可执行。治疗负担、喂食可行性和好坏日趋势都应进入决策。',
          tip: '长期管理要把患者和照护者都纳入计划。',
          reveal: { history: ['喂药困难，对新食物抗拒', '好日子减少但仍主动互动', '需要评估家庭可执行的管理方案'] }
        },
        {
          phase: '体检分层',
          title: '体检与稳定性',
          stem: '年糕约 6% 脱水，BCS 3/9、肌肉明显下降，黏膜苍白；体温正常，膀胱可排空，血压 155 mmHg。',
          question: '哪组问题应立即进入问题清单？',
          choices: [['脱水、营养和肌肉消耗、疑似贫血，以及 CKD 相关并发症', true], ['只有肌酐值得记录', false], ['血压 155 就是严重高血压危象', false]],
          feedback: '155 mmHg 属于高血压前期而非严重高血压。脱水、消瘦和苍白直接影响分期解释与生活质量。',
          tip: '先列临床问题，再看化验如何解释这些问题。',
          reveal: { exam: ['约 6% 脱水', 'BCS 3/9，肌肉明显下降', '黏膜苍白', '收缩压约 155 mmHg'] }
        },
        {
          phase: '检查选择',
          title: '并发症数据库',
          stem: '需要区分 CKD 进展、脱水影响和可以干预的并发症。',
          question: '哪组检查最合适？',
          choices: [['CBC、肾指标、磷钙钾、总 CO₂/血气、尿检/培养指征、UPC、血压复核及影像按病情安排', true], ['只做肌酐和 BUN', false], ['只做血常规，贫血就能解释全部症状', false]],
          feedback: '进展期 CKD 的症状常由多个并发症叠加，需要足够完整的数据才能排序。',
          tip: '检查组合要覆盖水合、尿毒症、矿物质、电解质、酸碱和贫血。',
          reveal: { tests: ['计划 CBC 和完整生化/电解质', '评估磷钙、钾和总 CO₂', '尿检后决定培养与 UPC 解释', '复核血压和影像指征'] }
        },
        {
          phase: '报告解读',
          title: '多项并发异常',
          stem: '纠正脱水后 CREA 4.2 mg/dL、SDMA 34 µg/dL；磷 6.1 mg/dL，K 3.0 mmol/L，总 CO₂ 15 mmol/L，HCT 24%；尿沉渣安静，UPC 0.18。',
          question: '怎样组合解读最准确？',
          choices: [['CKD 3 期，非蛋白尿，并存在高磷、低钾、代谢性酸中毒和明显贫血等并发症', true], ['只要肌酐 4.2，其余异常可以忽略', false], ['UPC 0.18 说明 CKD 已经康复', false]],
          feedback: 'CREA 2.9–5.0、SDMA 26–38 对应猫 3 期；UPC <0.2 为非蛋白尿。HCT 24%、低钾、高磷和低总 CO₂ 都可能影响生活质量与管理优先级。',
          tip: '分期之后继续问：是什么让这只猫今天难受？',
          reveal: { tests: ['稳定后 CREA 4.2、SDMA 34', '磷 6.1 mg/dL，K 3.0 mmol/L', '总 CO₂ 15 mmol/L', 'HCT 24%', '尿沉渣安静，UPC 0.18'] }
        },
        {
          phase: '工作诊断',
          title: '排列处理优先级',
          stem: '年糕同时存在多项异常，主人无法一次执行非常复杂的计划。',
          question: '哪种原则更合理？',
          choices: [['先处理脱水、恶心/摄入和影响安全与舒适的并发症，再分阶段加入可持续的磷钾、酸碱、贫血和长期饮食管理', true], ['一次同时强行加入所有药和新食物，不考虑依从性', false], ['只追求让肌酐数字下降', false]],
          feedback: '多病共存时要排序并复评。进展期管理的重点越来越偏向缓解症状、维持营养和生活质量，同时兼顾延缓进展。',
          tip: '复杂治疗要分阶段，每一步都定义目标和复查。',
          reveal: { assessment: ['IRIS CKD 3 期，非蛋白尿，高血压前期', '并发脱水、高磷、低钾、酸中毒和贫血', '优先改善舒适度、摄入和可逆问题'] }
        },
        {
          phase: '沟通管理',
          title: '目标与生活质量',
          stem: '主人问：“这么多问题是不是已经没必要治了？还是应该不惜一切代价把所有数字拉正常？”',
          question: '哪种回答最合适？',
          choices: [['治疗不是全做或全不做；可以围绕舒适、进食、水合和主人可执行性分层选择，并用体重、食欲、好坏日和化验趋势共同评估效果', true], ['必须把所有指标恢复正常才算成功', false], ['年龄大就不值得管理', false]],
          feedback: '共同决策要避免两个极端。进展期可以通过优先处理可逆和影响舒适的问题改善生活质量，同时持续评估治疗负担。',
          tip: '慢病终点不是一张漂亮化验单，而是可接受的生活质量。',
          reveal: { assessment: ['采用分层、可执行的共同决策', '疗效同时看症状、体重、生活质量和化验趋势', '持续讨论治疗收益与负担'] }
        }
      ]
    }
  ];

  const savedCaseResults = JSON.parse(localStorage.getItem('ckdTrainerCaseResults') || '{}');
  const state = {
    activeTab: 'overview',
    caseIndex: 0,
    caseStep: 0,
    caseScore: 0,
    answered: false,
    caseFinished: false,
    completedSections: new Set(JSON.parse(localStorage.getItem('ckdTrainerSections') || '[]')),
    caseResults: savedCaseResults
  };

  const tabs = document.querySelectorAll('[data-tab]');
  const panels = document.querySelectorAll('.panel');
  const navButtons = document.querySelectorAll('[data-jump]');
  const progressText = document.getElementById('progressText');
  const progressBar = document.getElementById('progressBar');
  const bestScore = document.getElementById('bestScore');

  function setTab(id) {
    state.activeTab = id;
    state.completedSections.add(id);
    localStorage.setItem('ckdTrainerSections', JSON.stringify([...state.completedSections]));
    tabs.forEach(button => button.classList.toggle('active', button.dataset.tab === id));
    navButtons.forEach(button => button.classList.toggle('active', button.dataset.jump === id));
    panels.forEach(panel => panel.classList.toggle('active', panel.id === id));
    updateProgress();
  }

  function updateProgress() {
    const sectionProgress = Math.round((state.completedSections.size / 7) * 60);
    const completedCases = trainingCases.filter(item => state.caseResults[item.id]?.completed).length;
    const caseProgress = trainingCases.length ? Math.round((completedCases / trainingCases.length) * 30) : 0;
    const checklistProgress = document.querySelectorAll('input[type="checkbox"]:checked').length ? 10 : 0;
    const total = Math.min(100, sectionProgress + caseProgress + checklistProgress);
    progressText.textContent = total + '%';
    progressBar.style.width = total + '%';
    bestScore.textContent = completedCases ? completedCases + '/4' : '未完成';
  }

  tabs.forEach(button => button.addEventListener('click', () => setTab(button.dataset.tab)));
  navButtons.forEach(button => button.addEventListener('click', () => setTab(button.dataset.jump)));
  document.querySelectorAll('input[type="checkbox"]').forEach(input => input.addEventListener('change', updateProgress));

  const reportButtons = document.querySelectorAll('[data-ckd-report]');
  const reportCases = document.querySelectorAll('#labs .report-case');
  reportButtons.forEach(button => button.addEventListener('click', () => {
    reportButtons.forEach(item => item.classList.toggle('active', item === button));
    reportCases.forEach(item => item.classList.toggle('active', item.id === button.dataset.ckdReport));
  }));

  document.querySelectorAll('[data-ckd-feedback] .lab-option').forEach(option => {
    option.addEventListener('click', () => {
      const question = option.closest('[data-ckd-feedback]');
      const isCorrect = option.dataset.correct === 'true';
      question.querySelectorAll('.lab-option').forEach(item => {
        item.disabled = true;
        if (item.dataset.correct === 'true') item.classList.add('correct');
      });
      if (!isCorrect) option.classList.add('wrong');
      const box = question.querySelector('.lab-feedback');
      box.innerHTML = '<b>' + (isCorrect ? '判断正确' : '重新看状态和时间线') + '</b><br>' + question.dataset.ckdFeedback;
      box.classList.add('show');
    });
  });

  const caseLibrary = document.getElementById('caseLibrary');
  const caseStagebar = document.getElementById('caseStagebar');
  const caseTitle = document.getElementById('caseTitle');
  const caseObjective = document.getElementById('caseObjective');
  const caseCounter = document.getElementById('caseCounter');
  const caseStageTitle = document.getElementById('caseStageTitle');
  const caseStem = document.getElementById('caseStem');
  const stageLabel = document.getElementById('stageLabel');
  const questionText = document.getElementById('questionText');
  const choices = document.getElementById('choices');
  const feedback = document.getElementById('feedback');
  const nextQuestion = document.getElementById('nextQuestion');
  const resetQuiz = document.getElementById('resetQuiz');
  const nextCase = document.getElementById('nextCase');
  const caseComplete = document.getElementById('caseComplete');
  const caseCompleteText = document.getElementById('caseCompleteText');
  const caseResultGrid = document.getElementById('caseResultGrid');
  const recordPatient = document.getElementById('recordPatient');
  const recordMeta = document.getElementById('recordMeta');
  const historyRecord = document.getElementById('historyRecord');
  const examRecord = document.getElementById('examRecord');
  const testRecord = document.getElementById('testRecord');
  const assessmentRecord = document.getElementById('assessmentRecord');
  const caseObjectiveCard = document.getElementById('caseObjectiveCard');
  const liveScore = document.getElementById('liveScore');
  const quizMeter = document.getElementById('quizMeter');
  const coachTip = document.getElementById('coachTip');

  function currentCase() {
    return trainingCases[state.caseIndex];
  }

  function currentStage() {
    return currentCase().stages[state.caseStep];
  }

  function renderCaseLibrary() {
    caseLibrary.innerHTML = '';
    trainingCases.forEach((item, index) => {
      const result = state.caseResults[item.id];
      const button = document.createElement('button');
      button.className = 'case-select' + (index === state.caseIndex ? ' active' : '') + (result?.completed ? ' complete' : '');
      button.innerHTML = '<span class="case-level ' + item.levelClass + '">' + item.level + '</span><b>' + item.title + '</b><span>' + item.short + (result?.best !== undefined ? ' · 最高 ' + result.best + '/7' : '') + '</span>';
      button.addEventListener('click', () => switchCase(index));
      caseLibrary.appendChild(button);
    });
  }

  function renderStagebar() {
    caseStagebar.innerHTML = '';
    currentCase().stages.forEach((stage, index) => {
      const done = state.caseFinished || index < state.caseStep;
      const node = document.createElement('div');
      node.className = 'stage-node' + (index === state.caseStep && !state.caseFinished ? ' current' : '') + (done ? ' done' : '');
      node.innerHTML = '<b>' + (done ? '✓' : index + 1) + '</b><span>' + stage.phase + '</span>';
      caseStagebar.appendChild(node);
    });
  }

  function collectRecords() {
    const records = { history: [], exam: [], tests: [], assessment: [] };
    currentCase().stages.slice(0, state.caseStep + 1).forEach(stage => {
      Object.entries(stage.reveal || {}).forEach(([group, items]) => {
        items.forEach(item => {
          if (!records[group].includes(item)) records[group].push(item);
        });
      });
    });
    return records;
  }

  function renderList(element, items) {
    element.innerHTML = items.length ? items.map(item => '<div class="record-item">' + item + '</div>').join('') : '<div class="record-empty">随病例推进逐步补充</div>';
  }

  function renderRecords() {
    const item = currentCase();
    const records = collectRecords();
    const patientParts = item.patient.split(' · ');
    recordPatient.textContent = patientParts[0];
    recordMeta.textContent = patientParts.slice(1).join(' · ');
    renderList(historyRecord, records.history);
    renderList(examRecord, records.exam);
    renderList(testRecord, records.tests);
    renderList(assessmentRecord, records.assessment);
    caseObjectiveCard.textContent = item.objective;
  }

  function renderCase() {
    const item = currentCase();
    const stage = currentStage();
    state.answered = false;
    state.caseFinished = false;
    caseComplete.classList.remove('show');
    feedback.classList.remove('show');
    feedback.textContent = '';
    nextQuestion.disabled = true;
    nextQuestion.textContent = state.caseStep === 6 ? '完成病例' : '进入下一阶段';
    caseTitle.textContent = item.title;
    caseObjective.textContent = item.short;
    caseCounter.textContent = '病例 ' + (state.caseIndex + 1) + '/4 · 阶段 ' + (state.caseStep + 1) + '/7';
    caseStageTitle.textContent = stage.title;
    caseStem.textContent = stage.stem;
    stageLabel.textContent = stage.phase;
    questionText.textContent = stage.question;
    coachTip.textContent = stage.tip;
    choices.innerHTML = '';
    stage.choices.forEach(([text, correct], index) => {
      const button = document.createElement('button');
      button.className = 'choice';
      button.textContent = text;
      button.dataset.choiceIndex = index;
      button.addEventListener('click', () => chooseAnswer(button, correct, stage.feedback));
      choices.appendChild(button);
    });
    renderCaseLibrary();
    renderStagebar();
    renderRecords();
    updateCaseScore();
  }

  function chooseAnswer(button, correct, explanation) {
    if (state.answered) return;
    state.answered = true;
    if (correct) state.caseScore += 1;
    const stage = currentStage();
    choices.querySelectorAll('.choice').forEach(item => {
      item.disabled = true;
      if (stage.choices[Number(item.dataset.choiceIndex)][1]) item.classList.add('correct');
    });
    if (!correct) button.classList.add('wrong');
    feedback.innerHTML = '<b>' + (correct ? '判断正确' : '这里要重新组织证据') + '</b><br>' + explanation;
    feedback.classList.add('show');
    nextQuestion.disabled = false;
    updateCaseScore();
  }

  function updateCaseScore() {
    liveScore.textContent = state.caseScore + '/7';
    quizMeter.style.width = Math.round((state.caseScore / 7) * 100) + '%';
  }

  function completeCurrentCase() {
    const item = currentCase();
    const previous = state.caseResults[item.id]?.best || 0;
    state.caseResults[item.id] = { completed: true, best: Math.max(previous, state.caseScore) };
    localStorage.setItem('ckdTrainerCaseResults', JSON.stringify(state.caseResults));
    state.caseFinished = true;
    state.completedSections.add('quiz');
    localStorage.setItem('ckdTrainerSections', JSON.stringify([...state.completedSections]));
    caseCompleteText.textContent = '本次得分 ' + state.caseScore + '/7，历史最高 ' + state.caseResults[item.id].best + '/7。';
    caseResultGrid.innerHTML = '<div><b>核心能力</b><span>' + item.summary.focus + '</span></div><div><b>常见陷阱</b><span>' + item.summary.trap + '</span></div><div><b>迁移应用</b><span>' + item.summary.transfer + '</span></div>';
    caseComplete.classList.add('show');
    nextQuestion.disabled = true;
    nextCase.textContent = state.caseIndex === 3 ? '回到病例 1' : '进入下一病例';
    renderCaseLibrary();
    renderStagebar();
    updateProgress();
  }

  function switchCase(index) {
    state.caseIndex = index;
    state.caseStep = 0;
    state.caseScore = 0;
    state.answered = false;
    state.caseFinished = false;
    renderCase();
  }

  nextQuestion.addEventListener('click', () => {
    if (state.caseStep < 6) {
      state.caseStep += 1;
      renderCase();
    } else {
      completeCurrentCase();
    }
  });
  resetQuiz.addEventListener('click', () => switchCase(state.caseIndex));
  nextCase.addEventListener('click', () => switchCase((state.caseIndex + 1) % 4));

  const chatLog = document.getElementById('chatLog');
  const doctorReply = document.getElementById('doctorReply');
  const scoreReply = document.getElementById('scoreReply');
  const resetChat = document.getElementById('resetChat');
  const commScore = document.getElementById('commScore');
  const ownerPrompt = '医生，网上说我家猫肌酐 2.2 就是肾衰了，是不是已经很严重？它现在还能吃，我想先买点“降肌酐”的药，不做其他检查可以吗？';

  function scoreCommunication(text) {
    const rules = [
      { name: '诊断边界', words: ['一次', '不能', '诊断', '分期', '稳定', '脱水', '复查'], max: 25 },
      { name: '检查解释', words: ['尿检', 'SDMA', '血压', '尿蛋白', '影像', '水合', '趋势'], max: 25 },
      { name: '同理心', words: ['理解', '担心', '我们', '先', '一起'], max: 25 },
      { name: '长期计划', words: ['管理', '复查', '饮水', '食欲', '体重', '生活质量'], max: 25 }
    ];
    return rules.map(rule => {
      const hits = rule.words.filter(word => text.includes(word)).length;
      return { name: rule.name, score: Math.min(rule.max, 8 + hits * 4) };
    });
  }

  scoreReply.addEventListener('click', () => {
    const text = doctorReply.value.trim();
    if (!text) {
      commScore.innerHTML = '<p>先输入准备对宠主说的话，再提交评分。</p>';
      return;
    }
    const bubble = document.createElement('div');
    bubble.className = 'bubble doctor';
    bubble.textContent = text;
    chatLog.appendChild(bubble);
    const result = scoreCommunication(text);
    const total = result.reduce((sum, item) => sum + item.score, 0);
    commScore.innerHTML = '<p><b>沟通得分：' + total + '/100</b></p>' + result.map(item => '<div class="score-item"><span>' + item.name + '：' + item.score + '/25</span><div class="score-line"><span style="width:' + item.score * 4 + '%"></span></div></div>').join('') + '<p>建议思路：一次肌酐升高还不能完整判断慢性程度。我们先确认水合和可逆因素，再结合复查趋势、尿检、SDMA、影像、血压和尿蛋白做分期。分期是为了决定管理重点和复查频率，不是单纯给疾病贴严重标签。</p>';
    state.completedSections.add('client');
    localStorage.setItem('ckdTrainerSections', JSON.stringify([...state.completedSections]));
    updateProgress();
  });

  resetChat.addEventListener('click', () => {
    chatLog.innerHTML = '<div class="bubble owner">' + ownerPrompt + '</div>';
    doctorReply.value = '';
    commScore.innerHTML = '<p>提交后从诊断边界、检查解释、同理心和长期计划四个维度给反馈。</p>';
  });

  document.body.style.visibility = 'visible';

  if (trainingCases.length) {
    renderCase();
  }
  updateProgress();
})();
