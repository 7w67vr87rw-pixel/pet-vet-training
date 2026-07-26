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
      <a href="ckd.html"><b>模块 02 · CKD</b>猫慢性肾病</a>
      <a class="active" href="aki.html"><b>模块 03 · AKI</b>猫急性肾损伤</a>
      <a href="cpv.html"><b>模块 04 · CPV</b>犬细小病毒性肠炎</a>
    </div>
    <div class="progress-box">
      <div class="progress-top"><span>当前进度</span><b id="progressText">0%</b></div>
      <div class="meter"><span id="progressBar"></span></div>
    </div>
    <nav class="nav" aria-label="模块导航">
      <button class="active" data-jump="overview">学习笔记</button>
      <button data-jump="path">急诊路径</button>
      <button data-jump="checklist">问诊体检</button>
      <button data-jump="labs">化验解读</button>
      <button data-jump="quiz">病例中心</button>
      <button data-jump="client">宠主模拟</button>
      <button data-jump="review">复盘</button>
    </nav>
    <div class="rail-note">本模块用于学习训练和产品验证，不替代真实急症中的诊断、处方、住院监护、手术或转诊判断。</div>
  `;

  main.innerHTML = `
    <section class="topbar">
      <div class="title-block">
        <div class="eyebrow">猫急性肾损伤 AKI · 基础班</div>
        <h1>先救命和寻找可逆病因，再用动态指标判断肾损伤</h1>
        <p class="lead">从急性呕吐、毒物暴露、少尿或肌酐快速升高出发，训练“稳定患者、区分肾前/肾性/肾后、IRIS AKI 分级、尿量与液体平衡、并发症监测和恢复期复查”的完整思路。</p>
      </div>
      <div class="status-card"><b id="bestScore">未完成</b><span>递进病例完成度</span></div>
    </section>

    <section class="tabs" aria-label="内容分区">
      <div class="tabs-guide">
        <strong>学习流程</strong>
        <span>共 7 个环节，建议依次完成</span>
      </div>
      <button class="active" data-tab="overview">学习笔记</button>
      <button data-tab="path">急诊路径</button>
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
            <p>AKI 是急性动态过程，不是一张化验单上的固定标签。新手首先要学会的不是背治疗，而是每次都回答：患者稳不稳定、尿能不能出去、伤害来自哪里、正在变好还是变坏。</p>
          </div>

          <section class="note-block definition">
            <h3>1. 什么是急性肾损伤</h3>
            <p>AKI 是肾功能在短时间内下降所形成的连续谱，可从尚未氮质血症的早期肾损伤发展到严重尿毒症、液体失衡、电解质和酸碱紊乱。过去常说“急性肾衰竭”，但 AKI 更能提醒我们：肌酐还正常时也可能已经发生损伤。</p>
            <p><b>IRIS 对 AKI 使用“分级”，不是 CKD 的稳定分期。</b>分级描述患者此刻的严重程度，会随着数小时或数天内的恶化、恢复或转为 CKD 而改变。</p>
          </section>

          <section class="note-block">
            <h3>2. 肾损伤的三种来源</h3>
            <div class="distinction-grid">
              <div class="distinction-card"><b>肾前性</b><p>脱水、低血容量、休克或严重低血压使肾灌注下降。若及时恢复灌注且肾实质未损伤，氮质血症可明显改善。</p></div>
              <div class="distinction-card"><b>肾性/实质性</b><p>毒物、缺血、感染、炎症或药物等直接损伤肾小管、间质、肾小球或血管。</p></div>
              <div class="distinction-card"><b>肾后性</b><p>尿道或输尿管阻塞、尿路破裂等妨碍尿液排出。解除原因前，只追加液体不能解决问题。</p></div>
              <div class="distinction-card"><b>混合型</b><p>肾前性或肾后性问题持续过久可继发实质损伤；CKD 猫也可能叠加 AKI。</p></div>
            </div>
          </section>

          <section class="note-block danger-box">
            <h3>3. 到院先判断“会不会马上恶化”</h3>
            <table class="matrix">
              <thead><tr><th>优先问题</th><th>危险线索</th><th>临床动作</th></tr></thead>
              <tbody>
                <tr><td>循环与呼吸</td><td>低体温、弱脉、黏膜灰白、意识下降、呼吸费力</td><td>按急诊流程稳定并同步获取床旁数据</td></tr>
                <tr><td>钾与心电</td><td>心动过缓、虚弱、塌陷、严重高钾或心电异常</td><td>优先心电与电解质评估，由医师处理致命风险</td></tr>
                <tr><td>尿液能否排出</td><td>无尿、反复蹲盆、膀胱紧张疼痛或双侧输尿管问题</td><td>立刻排查肾后性原因，不等待完整大检查</td></tr>
                <tr><td>液体过负荷</td><td>体重快速增加、呼吸频率上升、肺音异常、外周水肿</td><td>重新核对所有入量和出量，避免盲目加液</td></tr>
              </tbody>
            </table>
          </section>

          <section class="note-block">
            <h3>4. 病因问诊要主动追问</h3>
            <div class="term-grid">
              <div class="term-card"><b>百合暴露</b><span>猫接触花瓣、花粉、叶片或花瓶水都应视为重要急症线索；不能只问“有没有吃整朵花”。</span></div>
              <div class="term-card"><b>药物与毒物</b><span>NSAIDs、人用药、氨基糖苷类等潜在肾毒性药物，及乙二醇等毒物暴露。</span></div>
              <div class="term-card"><b>缺血与低灌注</b><span>严重脱水、休克、麻醉低血压、脓毒症或大出血可触发或加重 AKI。</span></div>
              <div class="term-card"><b>感染</b><span>肾盂肾炎等可能伴发热、肾区疼痛、炎性尿沉渣和影像改变。</span></div>
              <div class="term-card"><b>梗阻</b><span>尿道阻塞、输尿管结石或其他双侧/功能性单肾梗阻可导致肾后性氮质血症。</span></div>
              <div class="term-card"><b>既往 CKD</b><span>已有小肾、长期稀尿、体重下降或稳定基线氮质血症时，要考虑 AKI-on-CKD。</span></div>
            </div>
          </section>

          <section class="note-block">
            <h3>5. AKI、CKD 和 AKI-on-CKD</h3>
            <table class="matrix">
              <thead><tr><th>方向</th><th>更支持的线索</th><th>限制</th></tr></thead>
              <tbody>
                <tr><td>AKI</td><td>突然发病、近期暴露或低血压、肾脏正常至肿大/疼痛、指标快速变化、管型或肾小管细胞</td><td>贫血缺如不能单独证明 AKI</td></tr>
                <tr><td>CKD</td><td>数月体重下降和多饮多尿、小而不规则肾、持续稳定异常、非再生性贫血</td><td>CKD 猫也可突然失代偿</td></tr>
                <tr><td>AKI-on-CKD</td><td>明确 CKD 基线之上，48 小时肌酐增加 &gt;0.3 mg/dL 或出现新的尿量/临床异常</td><td>既要记录 CKD 背景，也要动态更新 AKI 分级</td></tr>
              </tbody>
            </table>
          </section>

          <section class="note-block">
            <h3>6. 2026 IRIS AKI 分级</h3>
            <p>分级以当前血肌酐、AKI 证据、动态变化和尿量为核心。肌酐正常不排除 I 级 AKI；脱水或阻塞等因素也必须纳入病因拆分。</p>
            <table class="matrix">
              <thead><tr><th>级别</th><th>血肌酐 mg/dL</th><th>临床理解</th></tr></thead>
              <tbody>
                <tr><td>I 级</td><td>&lt;1.6</td><td>非氮质血症 AKI；可有暴露/影像/尿液损伤证据，或 48 小时肌酐增加 &gt;0.3，或 6 小时少尿/无尿</td></tr>
                <tr><td>II 级</td><td>1.7–2.5</td><td>轻度氮质血症 AKI；也包括 CKD 基线之上 48 小时增加 &gt;0.3 mg/dL 的情况</td></tr>
                <tr><td>III 级</td><td>2.6–5.0</td><td>中度至重度 AKI，功能衰竭和尿毒症风险增加</td></tr>
                <tr><td>IV 级</td><td>5.1–10.0</td><td>严重 AKI，常需更密集监护和转诊能力评估</td></tr>
                <tr><td>V 级</td><td>&gt;10.0</td><td>极重度 AKI，常需尽早讨论肾脏替代治疗和预后</td></tr>
              </tbody>
            </table>
            <p>每一级还要注明尿量亚级：<b>NO</b> 为非少尿，<b>O</b> 为 6 小时内尿量 &lt;1 mL/kg/h 或无尿；若需要肾脏替代治疗则加注 <b>RRT</b>。</p>
          </section>

          <section class="note-block">
            <h3>7. 尿量是“生命体征”，不是附加项目</h3>
            <div class="distinction-grid">
              <div class="distinction-card"><b>IRIS 亚级阈值</b><p>&gt;1 mL/kg/h 记为非少尿；&lt;1 mL/kg/h 持续 6 小时或无尿记为少尿/无尿亚级。</p></div>
              <div class="distinction-card"><b>临床危险阈值</b><p>MSD 将 &lt;0.5 mL/kg/h 描述为少尿、&gt;2 mL/kg/h 描述为多尿。不同框架用途不同，不要混写。</p></div>
              <div class="distinction-card"><b>测量条件</b><p>记录导尿袋、尿垫、猫砂与自然排尿，并核对导管堵塞、漏尿和测量误差。</p></div>
              <div class="distinction-card"><b>动态转换</b><p>患者可从少尿期转入多尿恢复期；此时脱水、低钾和液体不足风险会改变。</p></div>
            </div>
          </section>

          <section class="note-block">
            <h3>8. 化验与影像如何组合</h3>
            <table class="matrix">
              <thead><tr><th>项目</th><th>要回答的问题</th><th>常见陷阱</th></tr></thead>
              <tbody>
                <tr><td>肌酐/BUN/SDMA</td><td>当前滤过功能及数小时至数天的趋势</td><td>单次正常肌酐不能排除早期 AKI</td></tr>
                <tr><td>钾、磷、总 CO₂/血气</td><td>识别致命电解质和酸碱并发症</td><td>少尿可高钾，多尿恢复期可低钾</td></tr>
                <tr><td>尿比重与沉渣</td><td>浓缩反应、管型、肾小管细胞、结晶、炎症和感染线索</td><td>输液后的尿比重解释受限；管型缺如不排除 AKI</td></tr>
                <tr><td>影像</td><td>肾大小结构、肾盂输尿管扩张、结石、梗阻和尿路完整性</td><td>“膀胱不大”不能排除双侧输尿管梗阻</td></tr>
                <tr><td>连续体重/出入量</td><td>判断复苏、持续丢失和液体过负荷</td><td>只记录输液泵速度，不统计药液、饮水和尿量</td></tr>
              </tbody>
            </table>
          </section>

          <section class="note-block danger-box">
            <h3>9. 液体治疗的核心是恢复正常容量</h3>
            <div class="cascade">
              <div class="cascade-step"><b>先判断容量</b><span>脱水和低灌注需要纠正，但速度与类型要结合猫的循环、心脏和电解质状态。</span></div>
              <div class="cascade-step"><b>再看反应</b><span>复查灌注、体重、呼吸、尿量、肌酐和电解质，而不是预设“冲肾”速度。</span></div>
              <div class="cascade-step"><b>匹配入量与出量</b><span>统计所有输入、尿液、呕吐腹泻及其他丢失，持续维持正常水合。</span></div>
              <div class="cascade-step"><b>防止过负荷</b><span>少尿/无尿患者盲目追加液体可造成肺或脑水肿并恶化结局。</span></div>
            </div>
          </section>

          <section class="note-block">
            <h3>10. 需要升级和转诊的信号</h3>
            <ul>
              <li>纠正容量后仍少尿或无尿，或持续出现无法匹配的液体正平衡。</li>
              <li>高钾、严重酸中毒、尿毒症或容量过负荷在常规支持下难以控制。</li>
              <li>怀疑百合、乙二醇等严重毒物，且当地具备时间敏感的去污、解毒或透析资源。</li>
              <li>双侧输尿管梗阻、功能性单肾梗阻或需要介入/手术解除的尿路问题。</li>
              <li>IRIS AKI 等级上升，或临床状态与数字持续恶化。</li>
            </ul>
          </section>

          <section class="note-block">
            <h3>11. 恢复不是“肌酐进参考区间就结束”</h3>
            <div class="learning-map">
              <div class="map-step"><b>住院趋势</b><span>按病情重复肌酐、尿量、电解质、酸碱、体重和呼吸监测。</span></div>
              <div class="map-step"><b>多尿恢复期</b><span>防止再次脱水、低钾和营养不足。</span></div>
              <div class="map-step"><b>病因复核</b><span>确认毒物、感染、低血压或梗阻是否真正解除。</span></div>
              <div class="map-step"><b>出院复查</b><span>复查肾指标、尿检、血压和临床症状，记录新的个体基线。</span></div>
              <div class="map-step"><b>长期结局</b><span>完全恢复、残留肾功能下降或转为 CKD 均可能，需要持续随访。</span></div>
            </div>
          </section>
        </article>

        <aside class="note-stack">
          <article class="card memory-box">
            <h2>记忆卡</h2>
            <p><b>一句话总纲：</b>先稳定和恢复尿路通畅，再区分肾前/肾性/肾后；肌酐看动态、尿量看 6 小时、液体看总出入。</p>
            <div class="tag-row"><span class="tag danger">急症优先</span><span class="tag">动态分级</span><span class="tag warn">尿量关键</span><span class="tag">防液体过负荷</span></div>
          </article>
          <article class="card">
            <h2>新手最容易漏</h2>
            <ul>
              <li>肌酐尚正常就排除早期 AKI。</li>
              <li>把所有氮质血症都叫“肾衰”。</li>
              <li>没有先排除尿道和输尿管梗阻。</li>
              <li>只记输液速度，不记每小时尿量和体重。</li>
              <li>少尿时仍用固定大液量“冲肾”。</li>
              <li>只看当天数值，不更新 AKI 等级和趋势。</li>
            </ul>
          </article>
          <article class="card">
            <h2>宠主解释模板</h2>
            <p>急性肾损伤不是只看一次肌酐。我们现在要同时确认循环是否稳定、尿液能否排出、有没有毒物或梗阻等可逆原因，并连续监测尿量、体重、电解质和肾指标。今天的分级只是当前状态，接下来是改善还是恶化会改变治疗强度和预后判断。</p>
          </article>
          <article class="card">
            <h2>资料来源</h2>
            <ul class="source-list">
              <li>IRIS Grading of Acute Kidney Injury，2026</li>
              <li>MSD Veterinary Manual：Renal Dysfunction in Dogs and Cats，2026 更新</li>
              <li>MSD Veterinary Manual：Urethral Obstruction in Small Animals，2025</li>
              <li>MSD Veterinary Manual：Houseplants and Ornamentals Toxic to Animals</li>
            </ul>
          </article>
        </aside>
      </div>
    </section>

    <section id="path" class="panel">
      <article class="card">
        <h2>AKI 接诊与动态判断路径</h2>
        <p>这条路径先处理威胁生命和可逆问题，再建立病因框架，最后才用 IRIS 分级描述当前严重程度。</p>
        <div class="simple-flow">
          <div class="flow-card start">急性呕吐/沉郁/少尿 · 毒物或低血压史 · 肌酐快速上升</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-card judge">ABC 与灌注 + 床旁钾/酸碱/肾指标 + 膀胱和尿路快速评估</div>
          <div class="flow-split">
            <div class="flow-path urgent">
              <div class="flow-label">不稳定 / 无尿 / 高钾</div>
              <div class="flow-card urgent">先稳定、心电监护并解除尿路阻塞或处理致命并发症</div>
              <div class="flow-arrow">↓</div>
              <div class="flow-card">同步统计尿量和总出入，尽早评估转诊能力</div>
            </div>
            <div class="flow-path check">
              <div class="flow-label">暂时稳定</div>
              <div class="flow-card check">追查毒物、药物、低灌注、感染与梗阻；收集输液前尿液</div>
              <div class="flow-arrow">↓</div>
              <div class="flow-card">肾前 / 肾性 / 肾后 / 混合型证据整合</div>
            </div>
          </div>
          <div class="flow-arrow">↓</div>
          <div class="flow-card action">按当前肌酐做 AKI I–V 级 + NO/O/RRT 亚级 → 连续复查并更新等级 → 恢复期筛查残留 CKD</div>
        </div>
      </article>
      <div class="grid two">
        <article class="card"><h2>每次查房都问</h2><ul><li>过去 6 小时尿量是多少，测量可信吗？</li><li>体重、呼吸和液体平衡是否提示过负荷？</li><li>肌酐、钾、磷和酸碱在变好还是变坏？</li><li>病因是否已处理，是否出现新的感染或梗阻证据？</li></ul></article>
        <article class="card"><h2>AKI 分级的作用</h2><ul><li>统一描述此刻严重程度。</li><li>帮助团队识别进展或恢复。</li><li>辅助监护强度、转诊和预后沟通。</li><li>不能替代病因诊断，也不等同治疗方案。</li></ul></article>
      </div>
    </section>

    <section id="checklist" class="panel">
      <div class="grid two">
        <article class="card">
          <h2>问诊优先级</h2>
          <div class="checklist">
            <label><input type="checkbox"> 发病是小时、天还是数周？最后一次正常进食、饮水和排尿是什么时候？</label>
            <label><input type="checkbox"> 家中是否出现百合花、花粉、花瓶水、乙二醇、人用药或杀虫/清洁用品？</label>
            <label><input type="checkbox"> 近期是否用过 NSAIDs、氨基糖苷类等潜在肾毒性药物，或经历麻醉低血压？</label>
            <label><input type="checkbox"> 是否持续呕吐腹泻、失血、发热、休克或长时间不进食饮水？</label>
            <label><input type="checkbox"> 尿量是减少、完全没有，还是尿团明显变大？有无蹲盆和疼痛？</label>
            <label><input type="checkbox"> 既往 CKD、结石、输尿管问题及基线肌酐/SDMA/尿比重如何？</label>
          </div>
        </article>
        <article class="card">
          <h2>体检优先级</h2>
          <div class="checklist">
            <label><input type="checkbox"> 精神意识、体温、心率、脉搏、黏膜、CRT、血压和呼吸。</label>
            <label><input type="checkbox"> 水合与低灌注，同时寻找体重增加、肺音异常等液体过负荷。</label>
            <label><input type="checkbox"> 膀胱大小、张力、疼痛及能否表达，外生殖器与尿路破裂线索。</label>
            <label><input type="checkbox"> 双肾大小、对称性和疼痛；腹部/腰部疼痛。</label>
            <label><input type="checkbox"> 口腔溃疡、尿毒症口气、呕吐、脱水和神经异常。</label>
            <label><input type="checkbox"> 导尿与尿量监测条件是否可靠，是否存在导管堵塞或漏尿。</label>
          </div>
        </article>
      </div>
      <article class="card">
        <h2>正常/异常判断速查</h2>
        <table class="matrix">
          <thead><tr><th>项目</th><th>相对稳定线索</th><th>异常或升级信号</th><th>下一步</th></tr></thead>
          <tbody>
            <tr><td>循环灌注</td><td>意识、脉搏、体温和血压相对稳定</td><td>休克、低体温、弱脉、意识下降</td><td>按急诊流程稳定并复查反应</td></tr>
            <tr><td>尿量</td><td>&gt;1 mL/kg/h</td><td>&lt;1 mL/kg/h 持续 6 小时或无尿</td><td>确认测量、容量与梗阻，标记 O 亚级</td></tr>
            <tr><td>钾/心电</td><td>钾与节律稳定</td><td>高钾、心动过缓或心电异常</td><td>立即升级监护和医师处理</td></tr>
            <tr><td>液体平衡</td><td>体重、呼吸和水合稳定</td><td>持续正平衡、体重快速增加、呼吸加快</td><td>重新计算所有入量/出量，防过负荷</td></tr>
            <tr><td>肾指标趋势</td><td>稳定或逐步下降</td><td>48 小时肌酐上升 &gt;0.3 mg/dL 或跨级上升</td><td>更新 AKI 分级并复核病因与转诊条件</td></tr>
          </tbody>
        </table>
      </article>
    </section>

    <section id="labs" class="panel">
      <article class="card">
        <h2>AKI 化验报告：固定读单顺序</h2>
        <p>先排生命危险和肾后性问题，再确认 AKI 证据；随后做动态分级，并用尿量、体重和并发症决定监护强度。</p>
        <div class="reading-order">
          <div class="reading-step"><strong>1. 稳定</strong><span>钾、酸碱、循环、意识和呼吸是否需要立即处理？</span></div>
          <div class="reading-step"><strong>2. 排出</strong><span>膀胱、尿道、输尿管和尿路完整性是否允许尿液排出？</span></div>
          <div class="reading-step"><strong>3. 定位</strong><span>肾前、肾性、肾后还是混合型？是否已有 CKD 基线？</span></div>
          <div class="reading-step"><strong>4. 分级</strong><span>当前肌酐 + 动态增加 + 6 小时尿量 + RRT 需求。</span></div>
          <div class="reading-step"><strong>5. 趋势</strong><span>按病情复查肌酐、电解质、酸碱、体重、呼吸和总出入。</span></div>
        </div>
      </article>
      <div class="lab-grid">
        <article class="lab-card"><h3>早期 AKI</h3><ul><li>48 小时肌酐增加 &gt;0.3 mg/dL 即使仍在参考区间，也可属于 I 级。</li><li>糖尿、管型、肾小管细胞或损伤标志物可提供支持。</li><li>必须结合暴露、低血压和影像。</li></ul><div class="result-example">读法：不要等肌酐“红字”才开始监测。</div></article>
        <article class="lab-card"><h3>尿量与容量</h3><ul><li>记录每小时尿量、体重、所有输入和持续丢失。</li><li>少尿必须先确认患者已适当恢复容量且导管通畅。</li><li>多尿恢复期仍可能危及水合和钾平衡。</li></ul><div class="result-example">读法：同样的肌酐，少尿和非少尿患者的管理难度不同。</div></article>
        <article class="lab-card"><h3>尿液与影像</h3><ul><li>输液前尿样更利于解释尿比重。</li><li>活动性沉渣提示感染、炎症或出血，但培养需合适采样。</li><li>超声重点查看双肾、肾盂、输尿管和膀胱。</li></ul><div class="result-example">读法：正常大小膀胱不能排除输尿管梗阻。</div></article>
      </div>
      <article class="card">
        <h2>模拟化验报告实训</h2>
        <p>报告 A 练习识别非氮质血症 AKI，报告 B 练习少尿、高钾、动态升级与液体过负荷风险。</p>
        <div class="report-switch" role="tablist">
          <button class="active" data-aki-report="akiReportA">报告 A：早期毒物暴露</button>
          <button data-aki-report="akiReportB">报告 B：少尿性 AKI</button>
        </div>
      </article>
      <section id="akiReportA" class="report-case active">
        <article class="case-box"><b>报告 A：2 岁已绝育母猫</b><span>主人昨日带回百合花，猫可能舔过花粉。当前精神尚可，持续排尿；基线 CREA 0.8 mg/dL，24 小时后 1.2 mg/dL。</span></article>
        <div class="report-layout">
          <article class="report-sheet">
            <div class="report-head"><div><b>入院与 24 小时趋势</b><span>教学模拟数据</span></div><div><b>目标</b><span>识别 I 级 AKI</span></div></div>
            <table class="report-table">
              <thead><tr><th>项目</th><th>基线/入院</th><th>24 小时</th><th>意义</th></tr></thead>
              <tbody>
                <tr><td>CREA</td><td>0.8 mg/dL</td><td>1.2 mg/dL</td><td>增加 0.4，仍未氮质血症</td></tr>
                <tr><td>尿量</td><td colspan="2">1.5–2.0 mL/kg/h</td><td>非少尿</td></tr>
                <tr><td>USG</td><td>1.018</td><td>—</td><td>结合暴露与水合解释</td></tr>
                <tr><td>尿沉渣</td><td colspan="2">少量颗粒管型与肾小管上皮细胞</td><td>支持肾小管损伤</td></tr>
                <tr><td>钾/磷</td><td colspan="2">目前无明显异常</td><td>仍需连续监测</td></tr>
              </tbody>
            </table>
          </article>
          <div class="lab-coach">
            <article class="lab-question" data-aki-feedback="存在明确风险暴露、尿沉渣损伤证据，且 24 小时肌酐增加 0.4 mg/dL；即使肌酐仍低于 1.6，也符合非氮质血症 AKI I 级。"><h3>1. 可以因为 CREA 仍正常而排除 AKI 吗？</h3><div class="lab-options"><button class="lab-option" data-correct="false">可以，只有超参考区间才叫 AKI</button><button class="lab-option" data-correct="true">不可以，符合 IRIS AKI I 级证据</button><button class="lab-option" data-correct="false">不可以，所以已经是 AKI IV 级</button></div><div class="lab-feedback"></div></article>
            <article class="lab-question" data-aki-feedback="尿量持续高于 1 mL/kg/h，因此当前可记为 AKI I 级（NO）。但等级和尿量均需继续动态更新。"><h3>2. 当前完整表述如何写？</h3><div class="lab-options"><button class="lab-option" data-correct="true">IRIS AKI I 级（NO），继续连续监测</button><button class="lab-option" data-correct="false">CKD 1 期，终身固定不变</button><button class="lab-option" data-correct="false">无肾病，不需要复查</button></div><div class="lab-feedback"></div></article>
          </div>
        </div>
      </section>
      <section id="akiReportB" class="report-case">
        <article class="case-box"><b>报告 B：6 岁已绝育公猫</b><span>急性呕吐沉郁，已纠正明显脱水，导尿管通畅；过去 6 小时尿量 0.3 mL/kg/h，CREA 从 4.4 升至 5.6 mg/dL。</span></article>
        <div class="report-layout">
          <article class="report-sheet">
            <div class="report-head"><div><b>复苏后动态复查</b><span>教学模拟数据</span></div><div><b>目标</b><span>分级 + 并发症</span></div></div>
            <table class="report-table">
              <thead><tr><th>项目</th><th>入院</th><th>复查</th><th>意义</th></tr></thead>
              <tbody>
                <tr><td>CREA</td><td>4.4 mg/dL</td><td>5.6 mg/dL</td><td>已从 III 级进入 IV 级</td></tr>
                <tr><td>尿量</td><td colspan="2">0.3 mL/kg/h，持续 6 小时</td><td>O 亚级</td></tr>
                <tr><td>K</td><td>5.8 mmol/L</td><td>6.8 mmol/L</td><td>进行性高钾</td></tr>
                <tr><td>总 CO₂</td><td>17 mmol/L</td><td>14 mmol/L</td><td>酸碱异常加重</td></tr>
                <tr><td>体重/呼吸</td><td>4.6 kg</td><td>4.9 kg，静息呼吸增快</td><td>警惕液体正平衡/过负荷</td></tr>
              </tbody>
            </table>
          </article>
          <div class="lab-coach">
            <article class="lab-question" data-aki-feedback="CREA 5.6 mg/dL 属于 IRIS AKI IV 级；尿量低于 1 mL/kg/h 持续 6 小时，当前应标记 O 亚级。"><h3>1. 当前 AKI 分类是什么？</h3><div class="lab-options"><button class="lab-option" data-correct="true">IRIS AKI IV 级（O）</button><button class="lab-option" data-correct="false">CKD IV 期</button><button class="lab-option" data-correct="false">AKI II 级（NO）</button></div><div class="lab-feedback"></div></article>
            <article class="lab-question" data-aki-feedback="少尿、高钾和酸中毒同时恶化，体重增加且呼吸加快提示液体过负荷风险。继续固定加大液量可能有害，应立即升级评估、核对出入量并尽早讨论转诊/RRT 条件。"><h3>2. 现在最不合适的做法是？</h3><div class="lab-options"><button class="lab-option" data-correct="false">核对导管、所有入量/出量并复查呼吸和体重</button><button class="lab-option" data-correct="true">无视尿量和体重，继续固定大液量“冲肾”</button><button class="lab-option" data-correct="false">升级监护并评估转诊和 RRT 资源</button></div><div class="lab-feedback"></div></article>
          </div>
        </div>
      </section>
    </section>

    <section id="quiz" class="panel">
      <article class="card">
        <h2>AKI 递进病例中心</h2>
        <p>四个病例分别训练百合暴露、肾前性氮质血症、输尿管梗阻和 AKI-on-CKD。每例 7 个连续决策，共 28 个节点。</p>
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
          <div class="chat-log" id="chatLog"><div class="bubble owner">医生，猫的肌酐已经 5.6 了，你们为什么还不能马上告诉我能不能恢复？是不是输液越多，肾就冲得越快？</div></div>
          <textarea id="doctorReply" placeholder="解释：AKI 为什么看动态、尿量和病因；为什么液体需要按出入量调整；何时需要转诊。"></textarea>
          <div class="actions"><button id="scoreReply" class="primary">提交沟通</button><button id="resetChat" class="secondary">重置模拟</button></div>
        </article>
        <aside class="coach"><h3>评分维度</h3><div id="commScore"><p>提交后从动态判断、风险解释、同理心和下一步计划四个维度给反馈。</p></div></aside>
      </div>
    </section>

    <section id="review" class="panel">
      <div class="grid two">
        <article class="card"><h2>基础班复盘题</h2><ul><li>为什么肌酐仍在参考区间也可能是 AKI I 级？</li><li>IRIS AKI 的 O 亚级与 MSD 的临床少尿阈值有什么区别？</li><li>为什么少尿患者不能用固定大液量“冲肾”？</li><li>膀胱不大时，为什么仍不能排除肾后性问题？</li><li>AKI 恢复后为什么还要筛查 CKD？</li></ul></article>
        <article class="card"><h2>产品体验观察点</h2><ul><li>急诊顺序是否比病名记忆更清楚？</li><li>动态肌酐和 6 小时尿量是否真正建立联系？</li><li>两份化验单是否能训练“正常值也可能异常”和“少尿防过负荷”？</li><li>病例是否覆盖了肾前、肾性、肾后和混合型？</li></ul></article>
      </div>
      <article class="card"><h2>下一版可增加</h2><div class="tag-row"><span class="tag">出入量计算器</span><span class="tag">肌酐趋势图</span><span class="tag">尿量计时器</span><span class="tag">高钾心电识别</span><span class="tag">转诊沟通单</span></div><p class="disclaimer">内容提示：真实 AKI 管理高度依赖病因、灌注、尿量、电解质、酸碱和医院监护能力；液体、药物和操作均由执业兽医按患者状态决定。</p></article>
    </section>
  `;

  const stageNames = ['初步分诊', '关键问诊', '重点体检', '检查计划', '报告解读', '工作诊断', '沟通管理'];
  const makeStage = (phase, title, stem, question, correct, wrongA, wrongB, feedback, tip, reveal) => ({
    phase, title, stem, question,
    choices: [[correct, true], [wrongA, false], [wrongB, false]],
    feedback, tip, reveal
  });

  const trainingCases = [
    {
      id: 'lily',
      title: '病例 1 · 百合暴露',
      short: '从正常肌酐识别早期 AKI',
      level: '基础',
      levelClass: '',
      patient: '可乐 · 2 岁 · 已绝育母猫 · 4.1 kg',
      objective: '训练目标：主动识别百合暴露、理解 AKI I 级并建立连续监测计划。',
      summary: { focus: '肌酐正常不排除早期 AKI', trap: '等出现氮质血症才开始重视', transfer: '所有时间敏感毒物都先问暴露时间与当前状态' },
      stages: [
        makeStage(stageNames[0], '花粉也算暴露', '主人发现可乐鼻头有黄色花粉，2 小时前舔过毛，目前精神尚可。', '第一判断是什么？', '按潜在百合暴露急症立即评估，不等出现症状', '回家观察，吐了再来', '只要没吃整朵花就没有风险', '猫接触百合花粉、叶片或花瓶水也可构成高风险暴露，早期状态正常不能排除随后肾损伤。', '毒物病例先抓时间窗。', { history: ['2 小时前可能舔到百合花粉', '目前尚无明显症状'] }),
        makeStage(stageNames[1], '还原暴露时间线', '花束昨天送到家，今天看到猫在桌边活动。', '最关键的追问组合是？', '花的种类、接触部位和时间，是否舔毛/饮花瓶水、是否已呕吐排尿及既往肾病', '只问猫粮品牌', '只问主人是否亲眼看见吞咽', '暴露未被亲眼看见并不能排除；花粉可通过舔毛摄入，时间决定去污和监测策略。', '把不确定暴露当作需要澄清的临床变量。', { history: ['花束入户约 24 小时', '可能接触花粉或花瓶水', '既往无已知肾病'] }),
        makeStage(stageNames[2], '建立基线', '可乐体温、循环和水合尚可，膀胱中等，双肾无明显疼痛。', '体检正常意味着什么？', '说明当前稳定，但不能排除早期肾小管损伤', '说明毒物已被肝脏清除', '说明不需要留取基线样本', 'AKI 早期可无明显体征，稳定状态正适合尽快取得基线并持续观察。', '正常体检是时间点信息，不是结案。', { exam: ['循环和水合暂稳定', '膀胱中等，可排尿', '双肾未见明显疼痛'] }),
        makeStage(stageNames[3], '基线与趋势检查', '需要判断当前有无损伤并为后续比较建立基线。', '哪组检查更完整？', 'CBC、生化/肌酐与电解质、尿检沉渣和尿比重，并按病情连续复查尿量与肾指标', '只做一次肌酐', '只拍胸片', '早期 AKI 依赖暴露史、尿液损伤证据和动态变化；单次肌酐敏感性不足。', '毒物暴露要有基线，更要有复查计划。', { tests: ['计划 CBC、生化和电解质', '输液前尿检与沉渣', '连续尿量和肾指标监测'] }),
        makeStage(stageNames[4], '非氮质血症也可分级', '基线 CREA 0.8，24 小时 1.2 mg/dL；尿量 1.6 mL/kg/h，沉渣见少量颗粒管型。', '怎样分类？', 'IRIS AKI I 级（NO）', '没有 AKI，因为 CREA 仍正常', 'IRIS CKD 2 期', '48 小时内肌酐增加超过 0.3 mg/dL，且有暴露和尿液损伤证据；尿量高于 1 mL/kg/h，属于 NO。', 'I 级的价值就是提前识别。', { tests: ['CREA 0.8→1.2 mg/dL/24h', '尿量 1.6 mL/kg/h', '少量颗粒管型'] }),
        makeStage(stageNames[5], '动态工作诊断', '可乐仍能排尿，电解质稳定，但肌酐已出现有意义上升。', '最合适的工作诊断是？', '疑似百合相关早期实质性 AKI，当前 I 级（NO），需继续密切监测', '单纯胃肠炎，与肾无关', '终末期 CKD', '病因、动态指标和尿液证据共同支持早期 AKI，当前等级不代表随后不会升级。', '工作诊断要同时写病因、级别和尿量。', { assessment: ['疑似百合相关实质性 AKI', 'IRIS AKI I 级（NO）', '仍需动态更新'] }),
        makeStage(stageNames[6], '解释为什么不能回家等', '主人认为猫没症状、肌酐也没超标，不理解为何要继续监测。', '怎样解释最准确？', '肾损伤可能先于超标和症状，当前已有动态变化；越早处理和监测越有机会阻止进展', '医院只是想多做检查', '等无尿时再处理效果一样', '把“早期无症状”和“动态上升”解释清楚，有助于主人理解时间敏感性。', '不夸大，也不能淡化早期风险。', { assessment: ['向主人说明早期 AKI 的时间敏感性', '监测目标是及时发现进展或恢复'] })
      ]
    },
    {
      id: 'prerenal',
      title: '病例 2 · 严重脱水',
      short: '肾前性氮质血症与 AKI 的边界',
      level: '进阶',
      levelClass: 'analysis',
      patient: '布丁 · 7 岁 · 已绝育公猫 · 5.0 kg',
      objective: '训练目标：先恢复灌注，用尿液和复查反应判断可逆肾前性成分，避免过早贴 AKI/CKD 标签。',
      summary: { focus: '容量反应是动态诊断证据', trap: '看到高肌酐立即写肾衰', transfer: '所有氮质血症先拆分肾前/肾性/肾后' },
      stages: [
        makeStage(stageNames[0], '先看灌注', '布丁连续呕吐腹泻 3 天，今日虚弱、低体温、黏膜干燥，CREA 3.1 mg/dL。', '第一优先是什么？', '评估和稳定循环灌注，同时获取床旁电解质和尿路信息', '直接分为 CKD 3 期', '只开止吐药回家', '严重液体丢失可导致肾前性氮质血症，也可进展为实质损伤；先稳定再判断。', '氮质血症不替代急诊评估。', { history: ['急性呕吐腹泻 3 天', '今日明显虚弱'] }),
        makeStage(stageNames[1], '寻找基线和持续损失', '主人说此前饮水排尿正常，无体重慢性下降。', '还要重点问什么？', '呕吐腹泻次数、摄入、用药毒物、尿量、既往肾指标和可能梗阻症状', '只问疫苗日期', '既然有腹泻就不必问尿量', '急性液体丢失、潜在肾毒物、尿量和基线共同决定肾前性与 AKI 的概率。', '每个急性病例都要找基线。', { history: ['此前无明显多饮多尿或消瘦', '无已知 CKD 基线'] }),
        makeStage(stageNames[2], '脱水不等于全部解释', '约 9% 脱水，脉弱，膀胱小但可表达，双肾无明显疼痛。', '如何理解？', '明确低容量可解释部分氮质血症，但仍需排除肾后性并观察复苏后反应', '膀胱小就是双侧输尿管梗阻', '脱水不会影响肌酐', '低灌注是强肾前性线索，但持续低灌注可继发 AKI，复查反应非常关键。', '证据支持方向，不等于结束鉴别。', { exam: ['约 9% 脱水、脉弱', '膀胱小但可表达', '双肾无明显疼痛'] }),
        makeStage(stageNames[3], '先取尿再复苏', '布丁尚能自然排尿。', '最有价值的检查组合是？', '尽可能在输液前取尿比重/沉渣，查生化电解质和影像指征，并连续复查灌注、体重、尿量与肾指标', '只做治疗后一次尿比重', '只做 SDMA 就能定位病因', '输液前尿样更能反映当时浓缩反应；连续复查才能判断容量反应和残留损伤。', '检查要服务于“是否可逆”。', { tests: ['输液前尿检与尿比重', '生化、电解质与酸碱评估', '连续体重、尿量和肾指标'] }),
        makeStage(stageNames[4], '看容量反应', '入院 USG 1.055；适当恢复容量并控制损失后，CREA 48 小时从 3.1 降至 1.1 mg/dL，尿量正常。', '最支持什么？', '肾前性氮质血症为主，当前没有持续氮质血症证据', '治疗治愈了 CKD 3 期', 'USG 高说明终身不会得肾病', '强浓缩尿和恢复容量后肌酐回到基线，支持可逆肾前性成分占主导。', '响应治疗也是诊断资料。', { tests: ['USG 1.055', 'CREA 3.1→1.1 mg/dL/48h', '恢复后尿量正常'] }),
        makeStage(stageNames[5], '保留诊断边界', '临床状态已改善，影像无明确慢性肾改变。', '工作诊断怎样写？', '急性胃肠液体丢失导致的肾前性氮质血症已改善，继续观察是否残留 AKI', 'CKD 3 期已完全治愈', '确诊百合中毒', '当前主要证据指向肾前性，但严重低灌注后仍应复查，确认没有残留或迟发 AKI。', '不要把改善写成不再需要随访。', { assessment: ['肾前性氮质血症为主并已改善', '暂缺持续 AKI/CKD 证据', '仍需恢复期复查'] }),
        makeStage(stageNames[6], '解释两次结果为何不同', '主人问第一次肌酐那么高是不是化验错了。', '怎么回答？', '第一次反映当时脱水和低灌注，复查改善帮助确认主要可逆因素；两次结果都真实且有价值', '第一次结果完全没用', '以后肾指标高都当脱水', '解释动态变化能避免主人把“改善”误解为前次错误，也避免未来忽视新异常。', '趋势不是推翻前一次，而是补全病程。', { assessment: ['向主人解释容量对肾指标的影响', '安排恢复后肾指标与尿液复查'] })
      ]
    },
    {
      id: 'ureter',
      title: '病例 3 · 输尿管梗阻',
      short: '膀胱不大也可能是肾后性急症',
      level: '进阶',
      levelClass: 'urgent',
      patient: '麻薯 · 8 岁 · 已绝育母猫 · 4.3 kg',
      objective: '训练目标：识别双侧/功能性单肾输尿管梗阻，理解影像与转诊时机。',
      summary: { focus: '肾后性不只等于尿道阻塞', trap: '膀胱不大就排除梗阻', transfer: '氮质血症伴无尿要沿整条尿路定位' },
      stages: [
        makeStage(stageNames[0], '无尿但膀胱不大', '麻薯 24 小时几乎未见尿，呕吐沉郁；膀胱小，CREA 6.2 mg/dL。', '第一判断是什么？', '仍需按肾后性/重度 AKI 急症评估，尤其考虑双侧输尿管或功能性单肾梗阻', '膀胱不大，所以没有梗阻', '直接按 CKD IV 期回家管理', '尿道阻塞常见大而痛的膀胱，但上尿路双侧梗阻可以膀胱小、无尿。', '无尿时要检查整条尿路。', { history: ['24 小时几乎未见尿', '急性呕吐沉郁'] }),
        makeStage(stageNames[1], '结石和肾脏基线', '既往超声曾提示双肾结石，右肾偏小。', '这条信息意味着什么？', '左侧新发梗阻可能在功能性单肾背景下造成严重氮质血症', '右肾小与当前无关', '有肾结石就一定是尿道栓', '一侧肾功能已差时，对侧输尿管梗阻可表现为近似双侧梗阻的急症。', '既往影像会改变“单侧”的意义。', { history: ['既往双肾结石', '右肾偏小，功能储备可能下降'] }),
        makeStage(stageNames[2], '并发症同步评估', '麻薯脱水、左肾区疼痛，膀胱小，心率偏慢。', '最优先补充什么？', '床旁钾/酸碱与心电，同时快速进行上尿路影像评估', '只做粪检', '等待膀胱变大再检查', '心率偏慢和无尿背景要警惕高钾；肾区疼痛与小膀胱支持上尿路定位。', '稳定和定位应并行。', { exam: ['脱水', '左肾区疼痛', '膀胱小', '心率偏慢'] }),
        makeStage(stageNames[3], '影像定位梗阻', '需要确认尿液为何到不了膀胱。', '哪组检查最关键？', '生化电解质/酸碱、尿检条件评估、腹部超声并根据需要加腹部 X 光或进一步影像', '只做尿 UPC', '只复查肌酐，不看尿路', '影像要追踪肾盂、输尿管、结石位置和双肾状态；化验同步评估高钾和尿毒症风险。', '病因检查不能被高肌酐遮住。', { tests: ['床旁电解质和酸碱', '腹部超声追踪双肾与输尿管', '按需补充腹部 X 光/进一步影像'] }),
        makeStage(stageNames[4], '把影像与分级合并', 'K 7.0 mmol/L，CREA 6.2；超声见左肾盂和近端输尿管扩张，结石处管腔中断，右肾萎缩。过去 6 小时无尿。', '怎样分类？', '左侧输尿管梗阻导致肾后性 AKI，IRIS IV 级（O），伴严重高钾风险', '单纯 FLUTD，无肾损伤', 'CKD IV 期且无需处理梗阻', '肌酐位于 IV 级，6 小时无尿属于 O；影像和功能性单肾背景明确支持肾后性病因。', '完整判断要有病因、等级、尿量和并发症。', { tests: ['K 7.0 mmol/L，CREA 6.2 mg/dL', '左肾盂/输尿管扩张并见结石', '右肾萎缩', '6 小时无尿'] }),
        makeStage(stageNames[5], '处理顺序', '当地医院无法开展输尿管介入，麻薯高钾且无尿。', '最合理的优先级是？', '先稳定高钾和循环，同时尽快联系具备解除梗阻/透析能力的转诊中心', '继续观察三天看结石是否自行消失', '只加大液量等待尿量增加', '肾后性原因未解除时延误会继续损伤肾脏；少尿无尿时盲目加液还会增加过负荷风险。', '知道本院能力边界是急诊能力的一部分。', { assessment: ['左输尿管梗阻性 AKI IV 级（O）', '伴高钾和功能性单肾风险', '需稳定并紧急转诊解除梗阻'] }),
        makeStage(stageNames[6], '解释为什么要转诊', '主人问：“既然是结石，不能先输液把它冲下来吗？”', '怎样解释？', '当前尿液无法有效排出且钾已危险，单纯加液不能解除梗阻并可能造成过负荷，需要尽快恢复尿流并评估高级支持', '输液一定能把任何结石冲走', '因为本院不想治疗', '把机械梗阻与液体作用边界讲清楚，主人更能理解转诊的时间敏感性。', '转诊沟通要说明风险、目标和时间。', { assessment: ['向主人解释梗阻不能靠盲目加液解决', '转诊目标是恢复尿流并控制致命并发症'] })
      ]
    },
    {
      id: 'acute-on-chronic',
      title: '病例 4 · AKI-on-CKD',
      short: '慢性基础上的急性恶化',
      level: '综合',
      levelClass: 'infection',
      patient: '团子 · 14 岁 · 已绝育公猫 · 3.8 kg',
      objective: '训练目标：保留 CKD 基线，同时用 48 小时动态变化识别和更新 AKI 分级。',
      summary: { focus: 'CKD 和 AKI 可以同时存在', trap: '把急性恶化都归为 CKD 自然进展', transfer: '任何已知慢病突然失代偿都要重新找可逆触发因素' },
      stages: [
        makeStage(stageNames[0], '慢病突然变坏', '团子既往稳定 CKD 2 期，基线 CREA 2.2；近 2 天拒食、呕吐、尿量减少，今日 CREA 3.7。', '如何理解？', '高度怀疑 AKI 叠加 CKD，应按急症寻找触发因素', '只是 CKD 正常进展，无需新评估', '肌酐没到 5，所以不严重', '短时间症状和肌酐明显变化不符合仅凭慢性分期解释，需寻找脱水、药物、感染和梗阻。', '慢病背景不能掩盖新急症。', { history: ['既往稳定 CKD 2 期，基线 CREA 2.2', '2 天急性拒食、呕吐和尿量减少'] }),
        makeStage(stageNames[1], '寻找触发因素', '主人提到一周前因关节痛自行喂过人用止痛药，猫随后进食下降。', '最关键判断是什么？', '潜在肾毒性药物和继发脱水可能共同触发 AKI', '人药剂量小就一定安全', '止痛药只影响肝脏', '药物暴露和低摄入可形成混合打击；需确认药名、剂量、时间并停止进一步暴露。', '必须具体问到药名和时间。', { history: ['一周前自行使用人用止痛药', '随后食欲与饮水下降'] }),
        makeStage(stageNames[2], '区分慢性和急性体征', '团子消瘦、双肾偏小，约 7% 脱水；膀胱可表达，仍有少量尿。', '怎样整合？', '小肾和消瘦支持 CKD，脱水与急性少尿支持叠加可逆/急性因素', '小肾证明只有 CKD，没有 AKI', '有尿就排除 AKI', '慢性证据与急性证据可同时存在；AKI 分级描述当前新增损伤。', '不要强迫病例只能归一个盒子。', { exam: ['消瘦、双肾偏小', '约 7% 脱水', '膀胱可表达，仍有少量尿'] }),
        makeStage(stageNames[3], '并发症与病因检查', '需要判断药物、低灌注、感染或梗阻的贡献。', '哪组检查更完整？', 'CBC、生化电解质/酸碱、尿检与培养指征、连续尿量、血压及肾脏/尿路影像', '只做肌酐', '只按旧 CKD 方案复诊', 'AKI-on-CKD 要同时评价急性病因、尿量和 CKD 并发症，旧分期不能替代新检查。', '先找能逆转的触发因素。', { tests: ['CBC、生化、电解质和酸碱', '尿检/培养指征', '连续尿量、血压和尿路影像'] }),
        makeStage(stageNames[4], '按当前 AKI 等级记录', '复水前 CREA 3.7，适当恢复容量后 48 小时升至 4.1；尿量 0.7 mL/kg/h 持续 6 小时，影像无梗阻。', '如何写当前分类？', 'AKI III 级（O）叠加既往 CKD 2 期', 'CKD 3 期即可，不需要提 AKI', 'AKI I 级（NO）', '当前肌酐 2.6–5.0 属 III 级；较基线增加远超 0.3，且 6 小时尿量低于 1，属于 O。', '同时保留两条轴：慢性基线和急性等级。', { tests: ['CREA 2.2 基线→3.7→4.1 mg/dL', '尿量 0.7 mL/kg/h/6h', '影像未见梗阻'] }),
        makeStage(stageNames[5], '重新排列优先级', '团子钾 5.9、总 CO₂ 16，血压 165 mmHg，持续恶心。', '当前管理原则是什么？', '按 AKI 住院监护尿量和液体平衡，处理急性并发症与症状，同时避免进一步肾毒物', '只按 CKD 2 期常规半年后复查', '用固定大液量让肌酐快速下降', '急性期优先安全、容量、尿量、电解质、酸碱和摄入；慢病长期方案要待状态稳定后重新评估。', '急性期和长期期的目标不同。', { assessment: ['AKI III 级（O）叠加 CKD 2 期', '伴高钾趋势、酸碱异常和恶心', '需密集监护并避免进一步肾毒物'] }),
        makeStage(stageNames[6], '解释预后不确定性', '主人问能否恢复到原来的 CKD 2 期。', '怎样回答最合适？', '现在无法用单个数值保证结局；我们会看病因控制、尿量和数日趋势，可能回到接近基线，也可能留下更高 CKD 阶段', '一定完全恢复', '一定会马上死亡', 'AKI 的恢复程度和时间差异大，应给出可能结局、当前监测指标和阶段性更新节点。', '诚实表达不确定性，同时给出可观察目标。', { assessment: ['与主人讨论完全/部分恢复或转为更高 CKD 阶段', '用尿量、症状和连续肾指标更新预后'] })
      ]
    }
  ];

  const savedCaseResults = JSON.parse(localStorage.getItem('akiTrainerCaseResults') || '{}');
  const state = {
    activeTab: 'overview',
    caseIndex: 0,
    caseStep: 0,
    caseScore: 0,
    answered: false,
    caseFinished: false,
    completedSections: new Set(JSON.parse(localStorage.getItem('akiTrainerSections') || '[]')),
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
    localStorage.setItem('akiTrainerSections', JSON.stringify([...state.completedSections]));
    tabs.forEach(button => button.classList.toggle('active', button.dataset.tab === id));
    navButtons.forEach(button => button.classList.toggle('active', button.dataset.jump === id));
    panels.forEach(panel => panel.classList.toggle('active', panel.id === id));
    updateProgress();
  }

  function updateProgress() {
    const sectionProgress = Math.round((state.completedSections.size / 7) * 60);
    const completedCases = trainingCases.filter(item => state.caseResults[item.id]?.completed).length;
    const caseProgress = Math.round((completedCases / trainingCases.length) * 30);
    const checklistProgress = document.querySelectorAll('input[type="checkbox"]:checked').length ? 10 : 0;
    const total = Math.min(100, sectionProgress + caseProgress + checklistProgress);
    progressText.textContent = total + '%';
    progressBar.style.width = total + '%';
    bestScore.textContent = completedCases ? completedCases + '/4' : '未完成';
  }

  tabs.forEach(button => button.addEventListener('click', () => setTab(button.dataset.tab)));
  navButtons.forEach(button => button.addEventListener('click', () => setTab(button.dataset.jump)));
  document.querySelectorAll('input[type="checkbox"]').forEach(input => input.addEventListener('change', updateProgress));

  const reportButtons = document.querySelectorAll('[data-aki-report]');
  const reportCases = document.querySelectorAll('#labs .report-case');
  reportButtons.forEach(button => button.addEventListener('click', () => {
    reportButtons.forEach(item => item.classList.toggle('active', item === button));
    reportCases.forEach(item => item.classList.toggle('active', item.id === button.dataset.akiReport));
  }));

  document.querySelectorAll('[data-aki-feedback] .lab-option').forEach(option => {
    option.addEventListener('click', () => {
      const question = option.closest('[data-aki-feedback]');
      const isCorrect = option.dataset.correct === 'true';
      question.querySelectorAll('.lab-option').forEach(item => {
        item.disabled = true;
        if (item.dataset.correct === 'true') item.classList.add('correct');
      });
      if (!isCorrect) option.classList.add('wrong');
      const box = question.querySelector('.lab-feedback');
      box.innerHTML = '<b>' + (isCorrect ? '判断正确' : '重新看时间线、尿量和危险信号') + '</b><br>' + question.dataset.akiFeedback;
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

  const currentCase = () => trainingCases[state.caseIndex];
  const currentStage = () => currentCase().stages[state.caseStep];

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
    localStorage.setItem('akiTrainerCaseResults', JSON.stringify(state.caseResults));
    state.caseFinished = true;
    state.completedSections.add('quiz');
    localStorage.setItem('akiTrainerSections', JSON.stringify([...state.completedSections]));
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
  const ownerPrompt = '医生，猫的肌酐已经 5.6 了，你们为什么还不能马上告诉我能不能恢复？是不是输液越多，肾就冲得越快？';

  function scoreCommunication(text) {
    const rules = [
      { name: '动态判断', words: ['动态', '趋势', '复查', '尿量', '肌酐', '分级'], max: 25 },
      { name: '风险解释', words: ['液体', '过负荷', '钾', '梗阻', '病因', '风险'], max: 25 },
      { name: '同理心', words: ['理解', '担心', '我们', '一起', '目前'], max: 25 },
      { name: '下一步计划', words: ['监测', '体重', '呼吸', '转诊', '评估', '恢复'], max: 25 }
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
    commScore.innerHTML = '<p><b>沟通得分：' + total + '/100</b></p>' + result.map(item => '<div class="score-item"><span>' + item.name + '：' + item.score + '/25</span><div class="score-line"><span style="width:' + item.score * 4 + '%"></span></div></div>').join('') + '<p>建议思路：AKI 的预后不能只凭一次肌酐保证。我们会连续看病因是否解除、6 小时尿量、体重和呼吸、电解质与肌酐趋势。液体的目标是恢复并维持正常容量，不是越多越好；少尿时过多液体反而可能造成危险。如果出现难以控制的高钾、酸中毒、过负荷或持续无尿，会尽早讨论转诊和肾脏替代治疗。</p>';
    state.completedSections.add('client');
    localStorage.setItem('akiTrainerSections', JSON.stringify([...state.completedSections]));
    updateProgress();
  });

  resetChat.addEventListener('click', () => {
    chatLog.innerHTML = '<div class="bubble owner">' + ownerPrompt + '</div>';
    doctorReply.value = '';
    commScore.innerHTML = '<p>提交后从动态判断、风险解释、同理心和下一步计划四个维度给反馈。</p>';
  });

  document.body.style.visibility = 'visible';
  renderCase();
  updateProgress();
})();
