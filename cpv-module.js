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
      <a href="aki.html"><b>模块 03 · AKI</b>猫急性肾损伤</a>
      <a class="active" href="cpv.html"><b>模块 04 · CPV</b>犬细小病毒性肠炎</a>
    </div>
    <div class="progress-box">
      <div class="progress-top"><span>当前进度</span><b id="progressText">0%</b></div>
      <div class="meter"><span id="progressBar"></span></div>
    </div>
    <nav class="nav" aria-label="模块导航">
      <button class="active" data-jump="overview">学习笔记</button>
      <button data-jump="path">接诊路径</button>
      <button data-jump="checklist">问诊体检</button>
      <button data-jump="labs">化验解读</button>
      <button data-jump="treatment">治疗管理</button>
      <button data-jump="quiz">病例中心</button>
      <button data-jump="client">宠主模拟</button>
      <button data-jump="review">复盘</button>
    </nav>
    <div class="rail-note">本模块用于学习训练和产品验证，不替代真实传染病病例中的隔离、诊断、处方、住院监护和上级医生判断。</div>
  `;

  main.innerHTML = `
    <section class="topbar">
      <div class="title-block">
        <div class="eyebrow">犬细小病毒性肠炎 CPV · 基础班</div>
        <h1>先隔离和稳定患者，再用证据确认细小并持续判断严重度</h1>
        <p class="lead">从未完成免疫的幼犬呕吐、腹泻出发，训练预检隔离、休克与低血糖识别、抗原检测解释、CBC/生化趋势、支持治疗监测、院感控制和宠主沟通。</p>
      </div>
      <div class="status-card"><b id="bestScore">未完成</b><span>递进病例完成度</span></div>
    </section>

    <section class="tabs" aria-label="内容分区">
      <div class="tabs-guide"><strong>学习流程</strong><span>共 8 个环节，建议依次完成</span></div>
      <button class="active" data-tab="overview">学习笔记</button>
      <button data-tab="path">接诊路径</button>
      <button data-tab="checklist">问诊体检</button>
      <button data-tab="labs">化验解读</button>
      <button data-tab="treatment">治疗管理</button>
      <button data-tab="quiz">病例中心</button>
      <button data-tab="client">宠主模拟</button>
      <button data-tab="review">复盘</button>
    </section>

    <section id="overview" class="panel active">
      <div class="lesson-grid">
        <article class="card note-stack">
          <div>
            <h2>系统学习笔记</h2>
            <p>犬细小病例的第一项能力不是看到血便后会背病名，而是在患者进入公共候诊区前识别风险，并把隔离、稳定、诊断和监测同时启动。</p>
          </div>

          <section class="note-block definition">
            <h3>1. 犬细小病毒性肠炎是什么</h3>
            <p>犬细小病毒 2 型主要攻击快速分裂的细胞，尤其是小肠隐窝上皮和骨髓前体细胞。肠黏膜屏障受损会造成呕吐、腹泻、蛋白和液体丢失；骨髓与淋巴组织受累可出现白细胞减少，叠加细菌移位后可能发展为全身炎症、脓毒症和休克。</p>
            <p><b>“血便”不是必需条件。</b>早期可能只有精神差、厌食和呕吐，腹泻可以不带血；因此风险分层必须结合年龄、免疫史、来源和接触史。</p>
          </section>

          <section class="note-block">
            <h3>2. 谁属于高风险患者</h3>
            <div class="term-grid">
              <div class="term-card"><b>年龄</b><span>幼犬最常见，尤其处于母源抗体下降而主动免疫尚未完整建立的阶段。</span></div>
              <div class="term-card"><b>免疫不完整</b><span>只打过一两针不等于已获得可靠保护；要核对首针年龄、间隔、末针年龄和疫苗记录。</span></div>
              <div class="term-card"><b>高密度来源</b><span>犬舍、救助站、宠物市场、集中运输或近期多犬接触会提高暴露概率。</span></div>
              <div class="term-card"><b>环境暴露</b><span>病毒可经被粪便污染的鞋底、笼具、地面、手套和器械间接传播，不需要犬与犬直接接触。</span></div>
            </div>
          </section>

          <section class="note-block danger-box">
            <h3>3. 电话或前台阶段就要启动隔离</h3>
            <table class="matrix">
              <thead><tr><th>听到的线索</th><th>立即动作</th><th>原因</th></tr></thead>
              <tbody>
                <tr><td>幼犬 + 呕吐/腹泻 + 疫苗未完成</td><td>通知医护，安排独立入口或隔离区，不进入普通候诊区</td><td>疑似病例即可造成环境污染</td></tr>
                <tr><td>虚弱、站立困难、四肢凉、反应差</td><td>隔离条件下按急诊优先评估循环和血糖</td><td>可能已休克、低血糖或低体温</td></tr>
                <tr><td>同行还有其他犬</td><td>分开管理并记录暴露关系</td><td>暴露犬和发病犬不能混在普通犬群中</td></tr>
              </tbody>
            </table>
          </section>

          <section class="note-block">
            <h3>4. 到院先判断是否不稳定</h3>
            <div class="distinction-grid">
              <div class="distinction-card"><b>灌注</b><p>意识、脉搏质量、心率、黏膜颜色、毛细血管再充盈时间、四肢温度和乳酸趋势。</p></div>
              <div class="distinction-card"><b>水合</b><p>体重、皮肤弹性、黏膜湿润度、眼球位置及持续呕吐腹泻造成的进行性丢失。</p></div>
              <div class="distinction-card"><b>代谢</b><p>幼犬糖原储备有限，低血糖可表现为虚弱、震颤、意识异常；同时关注钾、钠、氯和酸碱。</p></div>
              <div class="distinction-card"><b>感染/炎症</b><p>高热或低体温、白细胞显著下降、左移、低血压和精神恶化提示并发脓毒症风险。</p></div>
            </div>
          </section>

          <section class="note-block">
            <h3>5. 诊断不是只看一条试纸</h3>
            <table class="matrix">
              <thead><tr><th>证据</th><th>价值</th><th>局限</th></tr></thead>
              <tbody>
                <tr><td>病史与信号</td><td>确定检测前概率和隔离优先级</td><td>症状与其他胃肠疾病重叠</td></tr>
                <tr><td>粪便抗原检测</td><td>快速、适合到院即筛查并支持确诊</td><td>早期、排毒下降期或大量稀便稀释时可假阴性；不同产品受近期疫苗影响不同</td></tr>
                <tr><td>PCR</td><td>高疑似而抗原阴性时可作为补充</td><td>需结合临床和近期改良活疫苗史解释</td></tr>
                <tr><td>CBC/生化</td><td>评价严重度、并发症和趋势</td><td>白细胞正常不能单独排除早期细小</td></tr>
              </tbody>
            </table>
            <p>高风险幼犬即使首次抗原阴性，也不能立即撤销隔离。应重新核对采样和病程时间，结合 CBC、影像与鉴别诊断，按需要重复抗原检测或送 PCR。</p>
          </section>

          <section class="note-block">
            <h3>6. 常见鉴别诊断</h3>
            <div class="term-grid">
              <div class="term-card"><b>寄生虫与其他感染</b><span>贾第虫、球虫、蛔虫及其他病毒或细菌性肠炎，可与细小并存。</span></div>
              <div class="term-card"><b>胃肠异物/套叠</b><span>持续呕吐、局灶腹痛或影像异常时不能因抗原阳性而停止鉴别。</span></div>
              <div class="term-card"><b>饮食与毒物</b><span>突然换食、腐败食物、药物或毒物也可造成急性胃肠症状。</span></div>
              <div class="term-card"><b>其他全身病</b><span>胰腺炎、低肾上腺皮质功能等在合适信号下仍需考虑。</span></div>
            </div>
          </section>

          <section class="note-block">
            <h3>7. CBC 重点看什么</h3>
            <table class="matrix">
              <thead><tr><th>项目</th><th>可能变化</th><th>临床理解</th></tr></thead>
              <tbody>
                <tr><td>白细胞/中性粒细胞</td><td>减少，严重时显著下降</td><td>反映骨髓/消耗影响并增加细菌感染风险；连续趋势比单次更重要</td></tr>
                <tr><td>淋巴细胞</td><td>常减少</td><td>可作为支持证据，但不具特异性</td></tr>
                <tr><td>红细胞压积</td><td>脱水时相对升高；补液后变化</td><td>必须与总蛋白、体重和水合状态一起解释</td></tr>
                <tr><td>血小板</td><td>可正常或下降</td><td>下降时结合炎症、消耗和出血风险判断</td></tr>
              </tbody>
            </table>
          </section>

          <section class="note-block">
            <h3>8. 生化与床旁指标如何读</h3>
            <table class="matrix">
              <thead><tr><th>项目</th><th>异常方向</th><th>为什么重要</th></tr></thead>
              <tbody>
                <tr><td>血糖</td><td>可降低</td><td>幼犬、摄入不足或脓毒症时风险更高，需要及时识别并连续监测</td></tr>
                <tr><td>钾/钠/氯</td><td>随胃肠丢失和补液变化</td><td>影响肌力、心律、精神和液体方案</td></tr>
                <tr><td>白蛋白/总蛋白</td><td>可降低</td><td>提示肠道蛋白丢失、炎症与病程严重度，明显下降时关注水肿或积液</td></tr>
                <tr><td>尿素氮/肌酐</td><td>脱水时可肾前性升高</td><td>纠正灌注后要复查，不能把所有升高直接称为肾衰</td></tr>
                <tr><td>乳酸</td><td>低灌注时可升高</td><td>趋势可辅助判断复苏反应，但不能脱离整体灌注评价</td></tr>
              </tbody>
            </table>
          </section>

          <section class="note-block">
            <h3>9. 支持治疗的临床目标</h3>
            <div class="cascade">
              <div class="cascade-step"><b>恢复灌注与水合</b><span>根据休克、脱水、维持需要和持续丢失分别计算并反复评估，不使用固定“一袋到底”的方案。</span></div>
              <div class="cascade-step"><b>纠正代谢异常</b><span>连续复查血糖、电解质、酸碱、体重、尿量及乳酸等反应指标。</span></div>
              <div class="cascade-step"><b>控制症状与疼痛</b><span>由医师选择止吐、镇痛和其他支持，避免掩盖持续腹痛或机械性病变。</span></div>
              <div class="cascade-step"><b>尽早恢复肠内营养</b><span>呕吐得到控制且患者允许时，逐步提供可耐受营养，而不是长期无指征禁食。</span></div>
              <div class="cascade-step"><b>管理细菌移位风险</b><span>肠屏障破坏、显著中性粒细胞减少或脓毒症风险会影响抗菌药决策，由医师结合严重度进行管理。</span></div>
            </div>
            <p><b>这一节只建立目标。</b>具体液体拆分、药物类别、营养启动、监测调整和门诊方案请进入独立的“治疗管理”环节学习。</p>
          </section>

          <section class="note-block danger-box">
            <h3>10. 住院中需要立即升级的变化</h3>
            <ul>
              <li>低血压、乳酸不降、意识恶化、四肢持续冰冷或尿量明显减少。</li>
              <li>低血糖反复出现，钾/钠/酸碱异常进行性加重。</li>
              <li>中性粒细胞显著下降并伴高热或低体温、左移、低血压等脓毒症线索。</li>
              <li>白蛋白持续下降并出现外周水肿、腹水或胸腔积液。</li>
              <li>持续腹痛、顽固呕吐、腹胀或影像提示异物、套叠等并发问题。</li>
            </ul>
          </section>

          <section class="note-block">
            <h3>11. 隔离、清洁与消毒</h3>
            <ol>
              <li>先移除粪便、呕吐物和其他有机物，再清洁，最后使用对无包膜病毒有效的消毒剂并满足产品接触时间。</li>
              <li>隔离区使用专用器械、清洁工具和防护用品；人员流程由健康犬到疑似/确诊犬，避免逆向污染。</li>
              <li>含氯制剂、过硫酸氢钾复合物或经验证的加速过氧化氢产品可用于适当场景，但浓度、材质兼容性和接触时间必须按产品说明执行。</li>
              <li>草地、土壤和多孔材料难以彻底消毒，家庭管理重点是减少未完成免疫幼犬暴露，并由当地兽医制定隔离与疫苗计划。</li>
            </ol>
          </section>

          <section class="note-block">
            <h3>12. 预防与免疫理解</h3>
            <p>CPV 属于所有犬的核心疫苗抗原。WSAVA 2024 建议幼犬从 6–8 周龄开始，每 2–4 周接种一次，直到至少 16 周龄；高风险情况下末次可延至 20 周龄，并可在约 26 周龄增加一次核心疫苗。具体程序仍需结合本地疫苗说明、法规与风险。</p>
            <p>幼犬完成全程前仍可能处于母源抗体干扰形成的易感窗口，所以“打过针”不能代替核对完整免疫时间线。</p>
          </section>
        </article>

        <aside class="note-stack">
          <article class="card memory-box">
            <h2>记忆卡</h2>
            <p><b>一句话总纲：</b>高风险幼犬先隔离；不稳定先复苏；阳性要评严重度，阴性要看检测前概率；治疗效果靠连续趋势判断。</p>
            <div class="tag-row"><span class="tag danger">先隔离</span><span class="tag">看灌注</span><span class="tag warn">防低血糖</span><span class="tag">读趋势</span></div>
          </article>
          <article class="card">
            <h2>新手最容易漏</h2>
            <ul>
              <li>让疑似幼犬先在普通候诊区等待。</li>
              <li>没有血便就排除细小。</li>
              <li>首次抗原阴性就撤销隔离。</li>
              <li>只看总白细胞，不看中性粒细胞和连续趋势。</li>
              <li>只记录输液速度，不记录体重、尿量和持续丢失。</li>
              <li>抗原阳性后不再考虑异物或套叠。</li>
            </ul>
          </article>
          <article class="card">
            <h2>资料来源</h2>
            <ul>
              <li><a href="https://www.msdvetmanual.com/digestive-system/infectious-diseases-of-the-gastrointestinal-tract-in-small-animals/canine-parvovirus-infection-parvoviral-enteritis-in-dogs" target="_blank" rel="noreferrer">MSD Veterinary Manual：Canine Parvovirus Infection，2025</a></li>
              <li><a href="https://wsava.org/wp-content/uploads/2024/04/WSAVA-Vaccination-guidelines-2024.pdf" target="_blank" rel="noreferrer">WSAVA Vaccination Guidelines，2024</a></li>
              <li><a href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/canine-parvovirus-cpv/" target="_blank" rel="noreferrer">AAHA Canine Parvovirus Vaccination Guidance</a></li>
              <li><a href="https://www.aspcapro.org/topics-shelter-medicine-common-diseases/canine-parvovirus" target="_blank" rel="noreferrer">ASPCApro：Canine Parvovirus 与院感资源</a></li>
            </ul>
          </article>
        </aside>
      </div>
    </section>

    <section id="path" class="panel">
      <article class="card">
        <h2>犬细小接诊思维路径</h2>
        <p>路径的核心是把传播控制和患者抢救并行，而不是等检测结果出来后才决定是否隔离。</p>
        <div class="simple-flow">
          <div class="flow-card start">幼犬或免疫不完整犬：精神差 / 呕吐 / 腹泻 / 食欲废绝</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-card judge">电话预警或前台识别 → 绕开普通候诊区 → 进入隔离流程</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-card judge">快速评估意识、灌注、水合、体温、血糖与持续丢失</div>
          <div class="flow-split">
            <div class="flow-path urgent">
              <div class="flow-label">休克 / 低血糖 / 低体温 / 意识异常</div>
              <div class="flow-card urgent">隔离条件下先稳定患者，并同步取得床旁数据和基础样本</div>
              <div class="flow-arrow">↓</div>
              <div class="flow-card">住院密集监护，连续评估复苏反应与脓毒症风险</div>
            </div>
            <div class="flow-path check">
              <div class="flow-label">暂时稳定</div>
              <div class="flow-card check">粪便抗原 + CBC + 生化/电解质/血糖，按指征影像和粪检</div>
              <div class="flow-arrow">↓</div>
              <div class="flow-card">结合检测前概率判断确诊、复测/PCR或其他鉴别方向</div>
            </div>
          </div>
          <div class="flow-arrow">↓</div>
          <div class="flow-card action">选择与严重度和照护能力匹配的住院/门诊方案 → 每日趋势评估 → 达到出院标准后继续隔离、消毒与免疫计划</div>
        </div>
      </article>
      <div class="grid two">
        <article class="card"><h2>可以考虑门诊管理的前提</h2><ul><li>患者没有低血容量性休克或其他需要持续静脉支持的严重异常。</li><li>能够控制呕吐并接受规定的液体、营养和药物支持。</li><li>照护者能每日复诊、准确记录、立即识别恶化并具备严格居家隔离条件。</li><li>医院有明确门诊协议和升级住院/转诊标准。</li></ul></article>
        <article class="card danger-box"><h2>不能为了费用忽略严重度</h2><ul><li>低灌注、低血糖、低体温或意识异常。</li><li>顽固呕吐、无法维持摄入或持续大量丢失。</li><li>显著中性粒细胞减少、脓毒症或并发机械性病变风险。</li><li>家庭无法隔离、无法每日复诊或无法监测。</li></ul></article>
      </div>
    </section>

    <section id="checklist" class="panel">
      <div class="grid two">
        <article class="card">
          <h2>电话与前台预检</h2>
          <div class="checklist">
            <label><input type="checkbox"><span><b>年龄和疫苗</b><br>记录出生日期、每次疫苗日期与来源，不只写“打过”。</span></label>
            <label><input type="checkbox"><span><b>症状时间线</b><br>精神、食欲、呕吐和腹泻从何时开始，次数及是否带血。</span></label>
            <label><input type="checkbox"><span><b>来源与暴露</b><br>犬舍、救助、宠物市场、运输、多犬家庭及同窝犬是否发病。</span></label>
            <label><input type="checkbox"><span><b>危险表现</b><br>不能站立、反应差、四肢凉、持续呕吐或长时间无尿。</span></label>
          </div>
        </article>
        <article class="card">
          <h2>隔离区问诊</h2>
          <div class="checklist">
            <label><input type="checkbox"><span><b>摄入与持续丢失</b><br>最后进食饮水、能否留住水、尿量及每次呕吐腹泻的大致量。</span></label>
            <label><input type="checkbox"><span><b>既往处理</b><br>检测、补液、止吐、抗菌药、驱虫和疫苗的具体时间。</span></label>
            <label><input type="checkbox"><span><b>鉴别线索</b><br>异物、垃圾、换食、毒物、寄生虫和腹痛史。</span></label>
            <label><input type="checkbox"><span><b>家庭能力</b><br>其他犬免疫状态、隔离空间、复诊交通与费用边界。</span></label>
          </div>
        </article>
        <article class="card">
          <h2>体格检查与简单判断</h2>
          <table class="matrix">
            <thead><tr><th>检查</th><th>相对稳定</th><th>异常警报</th></tr></thead>
            <tbody>
              <tr><td>意识/姿势</td><td>警觉、可站立互动</td><td>迟钝、侧卧、不能站立</td></tr>
              <tr><td>循环</td><td>脉搏有力、黏膜粉红、CRT 约 1–2 秒</td><td>弱脉、灰白/砖红黏膜、CRT 延长或过快</td></tr>
              <tr><td>体温</td><td>处于个体和环境可解释范围</td><td>明显高热或低体温，尤其伴灌注异常</td></tr>
              <tr><td>腹部</td><td>柔软、轻微不适</td><td>局灶剧痛、腹胀、可疑包块</td></tr>
              <tr><td>体重/水合</td><td>体重稳定、黏膜湿润</td><td>快速下降、明显脱水或补液后异常增加</td></tr>
            </tbody>
          </table>
        </article>
        <article class="card">
          <h2>住院监测清单</h2>
          <div class="checklist">
            <label><input type="checkbox"><span><b>生命与灌注</b><br>意识、体温、心率、脉搏、黏膜、CRT、血压及乳酸趋势。</span></label>
            <label><input type="checkbox"><span><b>输入与输出</b><br>所有液体、饮水、营养、尿量、呕吐和腹泻。</span></label>
            <label><input type="checkbox"><span><b>连续化验</b><br>血糖、电解质、PCV/TS、CBC 和白蛋白按严重度复查。</span></label>
            <label><input type="checkbox"><span><b>感染控制</b><br>PPE、专用器械、清洁消毒记录和暴露犬名单。</span></label>
          </div>
        </article>
      </div>
    </section>

    <section id="labs" class="panel">
      <article class="card">
        <h2>犬细小化验报告解读</h2>
        <p>先判断患者是否不稳定，再按“感染证据、骨髓/消耗、灌注、持续丢失和代谢并发症”阅读，不要只盯抗原阳性。</p>
        <div class="report-switch" role="tablist">
          <button class="active" data-cpv-report="cpvReportA">报告 A · 初诊</button>
          <button data-cpv-report="cpvReportB">报告 B · 住院恶化</button>
        </div>
      </article>

      <section id="cpvReportA" class="report-case active">
        <article class="case-box"><b>报告 A：4 月龄未完成免疫公犬</b><span>呕吐 12 小时、稀便 3 次、精神差；约 7% 脱水，仍可站立，粪便抗原阳性。</span></article>
        <div class="report-layout">
          <article class="report-sheet">
            <div class="report-head"><div><b>初诊 CBC / 生化</b><span>教学模拟数据</span></div><div><b>目标</b><span>识别并发风险</span></div></div>
            <table class="report-table">
              <thead><tr><th>项目</th><th>结果</th><th>参考范围</th><th>标记</th></tr></thead>
              <tbody>
                <tr><td>WBC</td><td>2.1 ×10⁹/L</td><td>6.0–17.0</td><td class="flag-low">低</td></tr>
                <tr><td>中性粒细胞</td><td>0.8 ×10⁹/L</td><td>3.0–11.5</td><td class="flag-low">低</td></tr>
                <tr><td>淋巴细胞</td><td>0.5 ×10⁹/L</td><td>1.0–4.8</td><td class="flag-low">低</td></tr>
                <tr><td>PCV</td><td>52%</td><td>37–55</td><td>高端</td></tr>
                <tr><td>总蛋白</td><td>5.2 g/dL</td><td>5.4–7.5</td><td class="flag-low">低</td></tr>
                <tr><td>血糖</td><td>3.1 mmol/L</td><td>4.1–7.8</td><td class="flag-low">低</td></tr>
                <tr><td>钾</td><td>3.3 mmol/L</td><td>3.6–5.5</td><td class="flag-low">低</td></tr>
                <tr><td>白蛋白</td><td>2.4 g/dL</td><td>2.6–4.0</td><td class="flag-low">低</td></tr>
              </tbody>
            </table>
          </article>
          <div class="lab-coach">
            <article class="lab-question" data-cpv-feedback="抗原阳性支持 CPV；白细胞、中性粒细胞和淋巴细胞减少提示骨髓/消耗影响，低血糖、低钾和低蛋白说明患者已存在需要主动纠正和连续监测的并发症。"><h3>1. 怎样概括这份报告？</h3><div class="lab-options"><button class="lab-option" data-correct="true">CPV 阳性并伴白细胞减少、低血糖、低钾和蛋白丢失风险</button><button class="lab-option" data-correct="false">只有轻度脱水，不需要住院评估</button><button class="lab-option" data-correct="false">PCV 正常，所以没有液体丢失</button></div><div class="lab-feedback"></div></article>
            <article class="lab-question" data-cpv-feedback="PCV 位于高端而总蛋白偏低，既可能受脱水浓缩影响，也同时存在胃肠蛋白丢失；补液后两者都会变化，必须结合水合和连续趋势。"><h3>2. PCV 52% 应怎样解释？</h3><div class="lab-options"><button class="lab-option" data-correct="false">证明红细胞绝对增多</button><button class="lab-option" data-correct="true">结合脱水和低总蛋白解释，并在补液后复查</button><button class="lab-option" data-correct="false">可以忽略总蛋白</button></div><div class="lab-feedback"></div></article>
          </div>
        </div>
      </section>

      <section id="cpvReportB" class="report-case">
        <article class="case-box"><b>报告 B：住院第 2 天</b><span>体温 36.4°C、反应迟钝、脉弱、CRT 3 秒；体重较早晨下降，腹泻持续，乳酸上升。</span></article>
        <div class="report-layout">
          <article class="report-sheet">
            <div class="report-head"><div><b>动态复查</b><span>教学模拟数据</span></div><div><b>目标</b><span>识别脓毒症/休克</span></div></div>
            <table class="report-table">
              <thead><tr><th>项目</th><th>结果</th><th>参考范围</th><th>标记</th></tr></thead>
              <tbody>
                <tr><td>WBC</td><td>0.9 ×10⁹/L</td><td>6.0–17.0</td><td class="flag-low">重度低</td></tr>
                <tr><td>中性粒细胞</td><td>0.2 ×10⁹/L</td><td>3.0–11.5</td><td class="flag-low">重度低</td></tr>
                <tr><td>血糖</td><td>2.6 mmol/L</td><td>4.1–7.8</td><td class="flag-low">低</td></tr>
                <tr><td>钾</td><td>3.0 mmol/L</td><td>3.6–5.5</td><td class="flag-low">低</td></tr>
                <tr><td>白蛋白</td><td>1.8 g/dL</td><td>2.6–4.0</td><td class="flag-low">低</td></tr>
                <tr><td>乳酸</td><td>5.2 mmol/L</td><td>0.5–2.5</td><td class="flag-high">高</td></tr>
                <tr><td>收缩压</td><td>78 mmHg</td><td>临床目标依状态</td><td class="flag-low">低</td></tr>
              </tbody>
            </table>
          </article>
          <div class="lab-coach">
            <article class="lab-question" data-cpv-feedback="低体温、低血压、弱脉、CRT 延长和高乳酸共同提示低灌注/休克；重度中性粒细胞减少、低血糖和临床恶化使脓毒症风险显著升高。"><h3>1. 当前最重要的判断是？</h3><div class="lab-options"><button class="lab-option" data-correct="true">低灌注性休克并高度警惕脓毒症，需立即升级处理</button><button class="lab-option" data-correct="false">只是正常住院波动</button><button class="lab-option" data-correct="false">只补钾即可解决全部问题</button></div><div class="lab-feedback"></div></article>
            <article class="lab-question" data-cpv-feedback="需要同步复苏和复查反应、纠正低血糖与电解质、重新核算持续丢失、评估抗菌药和营养支持，并排查腹痛或胃肠并发症。任何单项处理都不足以覆盖当前风险。"><h3>2. 下一步思路最完整的是？</h3><div class="lab-options"><button class="lab-option" data-correct="false">等明天再复查</button><button class="lab-option" data-correct="false">只增加固定输液速度</button><button class="lab-option" data-correct="true">按休克升级复苏并同步纠正代谢异常、感染风险和持续丢失</button></div><div class="lab-feedback"></div></article>
          </div>
        </div>
      </section>
    </section>

    <section id="treatment" class="panel">
      <article class="card">
        <div class="eyebrow">治疗管理 · 从异常到行动</div>
        <h2>犬细小没有一张适用于所有患者的固定处方</h2>
        <p>核心是把患者的问题拆成灌注、脱水与持续丢失、呕吐和疼痛、细菌移位风险、低血糖/电解质、营养和并发症七条线。每项干预都要写清目标、复查指标和升级条件。</p>
        <div class="tag-row"><span class="tag danger">先复苏</span><span class="tag">补足持续丢失</span><span class="tag warn">早期肠内营养</span><span class="tag">按反应调整</span></div>
      </article>

      <article class="card">
        <h2>治疗顺序：先处理会在数小时内恶化的问题</h2>
        <div class="cascade">
          <div class="cascade-step"><b>1. 隔离 + 快速稳定</b><span>建立隔离动线，称重，评估 ABC、意识、灌注、体温和床旁血糖；不稳定患者边复苏边采样。</span></div>
          <div class="cascade-step"><b>2. 建立问题清单</b><span>休克、脱水、持续丢失、低血糖/低钾、呕吐、腹痛、中性粒细胞减少和低蛋白分别记录。</span></div>
          <div class="cascade-step"><b>3. 组合支持</b><span>液体、止吐、镇痛、抗菌药、营养和代谢纠正同步安排，而不是只“挂水观察”。</span></div>
          <div class="cascade-step"><b>4. 复查并改方案</b><span>用意识、脉搏、CRT、血压、体重、尿量、乳酸、血糖、电解质和丢失量验证治疗反应。</span></div>
          <div class="cascade-step"><b>5. 识别退出路径</b><span>达到稳定和摄入标准才考虑出院；任何低灌注、顽固呕吐或照护失败都要升级住院/转诊。</span></div>
        </div>
      </article>

      <div class="grid two">
        <article class="card">
          <h2>1. 液体治疗要拆成四笔账</h2>
          <table class="matrix">
            <thead><tr><th>组成</th><th>回答的问题</th><th>执行要点</th></tr></thead>
            <tbody>
              <tr><td>复苏量</td><td>当前是否低灌注或休克？</td><td>由医师选择平衡等渗晶体液并分次给予，每次后立即复查意识、脉搏、CRT、血压、肺音和乳酸趋势。</td></tr>
              <tr><td>脱水缺失量</td><td>入院前已经缺了多少？</td><td><b>估算缺失量（mL）= 脱水比例 × 体重（kg）× 1000</b>。这是估算值，需用称重和复查修正。</td></tr>
              <tr><td>维持需要</td><td>基础生理需要是多少？</td><td>根据年龄、体重、肾功能和摄入情况制定，不把维持量当成全部输液量。</td></tr>
              <tr><td>持续丢失</td><td>治疗后还在吐和拉多少？</td><td>呕吐、腹泻、尿量和采血等按班次记录并补回；持续丢失变化时及时重算。</td></tr>
            </tbody>
          </table>
          <p class="disclaimer">皮下或口服液体只适用于经医师筛选的稳定、轻度脱水患者。中重度脱水、休克、顽固呕吐或吸收不可靠时通常需要静脉通路和住院监测。</p>
        </article>

        <article class="card">
          <h2>补液后怎样判断“有效”而不是只看滴速</h2>
          <table class="matrix">
            <thead><tr><th>复查维度</th><th>期待方向</th><th>异常时想到什么</th></tr></thead>
            <tbody>
              <tr><td>灌注</td><td>意识改善、脉搏增强、CRT/血压和乳酸向好</td><td>复苏不足、持续丢失、脓毒症、低血糖或其他休克原因</td></tr>
              <tr><td>体重/水合</td><td>缺失逐渐纠正且不过快增加</td><td>记录遗漏、持续丢失未补足，或液体过负荷</td></tr>
              <tr><td>尿量</td><td>灌注改善后产生可解释尿量</td><td>低灌注持续、肾损伤、梗阻或记录不完整</td></tr>
              <tr><td>呼吸/肺音</td><td>呼吸状态稳定</td><td>呼吸频率上升、湿啰音或体重异常增加时警惕液体过负荷</td></tr>
            </tbody>
          </table>
        </article>

        <article class="card">
          <h2>2. 血糖、电解质与酸碱</h2>
          <ul>
            <li><b>低血糖：</b>幼犬、长期厌食和脓毒症患者风险高。纠正后仍要连续复查，因为一次正常不代表风险消失。</li>
            <li><b>低钾：</b>胃肠丢失和摄入不足常见，可造成无力、胃肠动力下降和心律问题。补钾必须由医师计算，确认液体混匀、泵速可靠并关注尿量。</li>
            <li><b>钠/氯和酸碱：</b>不能凭单值机械换液；要结合丢失类型、补液种类、神经状态和变化速度。</li>
            <li><b>助理任务：</b>标注采样时间、当时液体与营养方案、最近呕吐腹泻和体重，避免把无时间背景的结果交给医师。</li>
          </ul>
        </article>

        <article class="card">
          <h2>3. 止吐、胃肠动力与镇痛</h2>
          <ul>
            <li><b>止吐目标：</b>减少继续脱水、改善舒适度，并为口服液体和肠内营养创造条件。常见选择包括马罗匹坦或昂丹司琼，具体药物与途径由医师决定。</li>
            <li><b>仍然呕吐：</b>先核对给药、液体和持续丢失，再排查胃潴留、异物、套叠、胰腺炎或严重腹膜/脓毒症问题；不能只叠加止吐药。</li>
            <li><b>胃肠动力药：</b>只有在机械性梗阻被合理排除、且确有胃潴留/动力不足时才考虑。</li>
            <li><b>疼痛：</b>腹痛会降低摄入并影响恢复，常需要适合低灌注患者的镇痛方案。脱水、低血压或肾灌注不足时避免自行使用 NSAIDs。</li>
            <li><b>止泻药：</b>不作为常规核心治疗；抑制肠内容物排出可能增加受损肠道中的细菌移位和并发风险。</li>
          </ul>
        </article>

        <article class="card danger-box">
          <h2>4. 抗菌药：针对屏障破坏和脓毒症风险，不是“杀细小病毒”</h2>
          <ul>
            <li>CPV 破坏肠屏障并常伴中性粒细胞减少，重症、发热或低体温、低血压、左移、显著中性粒细胞减少等患者通常需要肠外抗菌覆盖。</li>
            <li>基础思路是覆盖肠源性革兰阳性、厌氧菌；重症或显著中性粒细胞减少时由医师评估增加革兰阴性覆盖。</li>
            <li>选择时同时考虑幼犬年龄、肾灌注、脱水状态、既往用药和当地耐药情况。氨基糖苷类在脱水和肾灌注未纠正前风险更高。</li>
            <li>持续发热/低体温、低血压或治疗反应差时，重新寻找导管感染、腹腔并发症或其他感染灶，并按条件采样培养。</li>
            <li>记录首次给药时间、途径、后续体温/白细胞和临床反应；不要把“已用抗菌药”等同于感染风险已解决。</li>
          </ul>
        </article>

        <article class="card">
          <h2>5. 早期肠内营养不是等到完全不吐才开始</h2>
          <ul>
            <li>传统的长时间禁食会延迟肠黏膜恢复。住院厌食犬在稳定后应尽早制定肠内营养计划。</li>
            <li>无法自主摄入时，医师可评估鼻食管/鼻胃管，以少量、易消化、低脂液体食物持续或分次喂饲。</li>
            <li>喂饲后记录恶心、呕吐、腹胀、腹痛和腹泻变化；耐受后逐步提高，而不是一次达到全量。</li>
            <li>能控制呕吐并保持水分后，可逐步恢复饮水和高消化率饮食。肠外营养一般留给长期不能耐受肠内营养的患者。</li>
            <li>寄生虫风险应同时评估；驱虫时机和方案要结合稳定性、粪检、年龄与既往用药。</li>
          </ul>
        </article>

        <article class="card">
          <h2>6. 低蛋白、贫血和血液制品</h2>
          <ul>
            <li>PCV 与总蛋白要成对看：脱水可使 PCV 偏高，而肠道丢失可使总蛋白/白蛋白下降。</li>
            <li>明显低白蛋白并伴外周水肿、腹水、胸腔积液或循环问题时，需要升级评估胶体渗透压支持和并发症。</li>
            <li>新鲜冰冻血浆只能部分补充白蛋白，同时提供凝血及其他血浆成分；是否使用不能只按一个白蛋白数字决定。</li>
            <li>全血或红细胞制品依据有临床意义的贫血、持续出血和氧输送判断，并非看到血便就常规输血。</li>
          </ul>
        </article>

        <article class="card">
          <h2>7. 单克隆抗体和其他辅助疗法</h2>
          <table class="matrix">
            <thead><tr><th>项目</th><th>当前定位</th><th>学习结论</th></tr></thead>
            <tbody>
              <tr><td>犬细小病毒单克隆抗体</td><td>部分国家/地区可获得，研究结果有希望</td><td>在当地合法可用且符合产品条件时可由医师评估，不能替代液体、抗菌、止吐、营养和监测。</td></tr>
              <tr><td>康复犬血清/高免血清</td><td>缺乏支持其被动免疫获益的可靠证据</td><td>不应因为“有抗体”就替代标准支持治疗。</td></tr>
              <tr><td>奥司他韦</td><td>研究未显示降低住院时间、严重度或死亡率</td><td>不是 CPV 的常规治疗。</td></tr>
              <tr><td>粪菌移植</td><td>有小型研究提示可能缩短腹泻/住院时间</td><td>属于有条件的辅助技术，需要严格供体筛查和医院流程，不是基础班常规操作。</td></tr>
            </tbody>
          </table>
        </article>
      </div>

      <article class="card">
        <h2>住院治疗闭环：每次复查都要能回答“继续、调整还是升级”</h2>
        <table class="matrix">
          <thead><tr><th>观察结果</th><th>首先核对</th><th>可能的方案调整方向</th></tr></thead>
          <tbody>
            <tr><td>脉搏仍弱、血压低、乳酸不降</td><td>复苏量、持续丢失、体温、血糖、测量质量</td><td>重新评估休克类型、液体反应、脓毒症与转诊/高级监护需要</td></tr>
            <tr><td>血糖反复下降</td><td>输注是否中断、摄入、感染和肝功能风险</td><td>调整葡萄糖支持并缩短复查间隔，同时处理根本原因</td></tr>
            <tr><td>钾继续下降、无力或肠鸣减弱</td><td>补钾浓度/泵速、尿量和持续胃肠丢失</td><td>医师重算补充并加强心律、尿量和电解质监测</td></tr>
            <tr><td>呕吐持续或出现局灶腹痛</td><td>止吐执行、喂饲耐受和腹部检查</td><td>调整症状控制并使用影像排除异物、套叠等并发症</td></tr>
            <tr><td>体重快速增加、呼吸加快</td><td>输入输出记录、尿量、肺音和外周水肿</td><td>警惕液体过负荷，立即重新评估液体计划</td></tr>
            <tr><td>中性粒细胞进一步下降并低体温</td><td>抗菌给药时间、导管和其他感染灶</td><td>按脓毒症升级监护、抗菌策略和感染源排查</td></tr>
          </tbody>
        </table>
      </article>

      <div class="grid two">
        <article class="card">
          <h2>结构化门诊方案必须同时满足</h2>
          <ul>
            <li>患者目前循环稳定，无低血糖、低体温、意识异常或中重度脱水。</li>
            <li>呕吐已能控制，可按协议接受皮下/口服液体、药物和少量营养。</li>
            <li>有 CBC、血糖/电解质、体重和水合基线，能够每日复诊并比较趋势。</li>
            <li>照护者能隔离、记录摄入输出，并理解立即返回医院的具体触发条件。</li>
            <li>门诊是降低照护强度，不是取消治疗；任何资格条件消失都应改为住院或转诊。</li>
          </ul>
        </article>
        <article class="card">
          <h2>出院前不是只看“今天没拉”</h2>
          <ul>
            <li>循环、体温、血糖和电解质稳定，不再依赖持续静脉复苏。</li>
            <li>能自主摄入并留住水和食物，呕吐受控，腹泻量和频率明显改善。</li>
            <li>精神、体重和尿量趋势可接受，没有新的腹痛或脓毒症线索。</li>
            <li>口服/居家方案、复查时间、恶化标准、隔离消毒和同住犬管理已书面交代。</li>
            <li>临床改善不等于立即停止排毒；恢复期隔离和活动时间按医院与当地指南执行。</li>
          </ul>
        </article>
      </div>

      <article class="card memory-box">
        <h2>助理交班模板</h2>
        <p><b>“患者目前是否稳定；本班输入、尿量、呕吐和腹泻各多少；体重怎样变化；最近血糖、电解质、PCV/TS、白细胞和白蛋白趋势；止吐、镇痛、抗菌和营养何时执行；下一次复查与立即上报条件是什么。”</b></p>
        <p class="disclaimer">本环节用于训练治疗思路和监测闭环，不提供可脱离患者使用的处方。实际液体速度、葡萄糖/电解质补充、抗菌药、止吐镇痛、营养管和血液制品均须由执业兽医结合检查结果制定。</p>
      </article>
    </section>

    <section id="quiz" class="panel">
      <article class="card">
        <h2>犬细小递进病例中心</h2>
        <p>四个病例训练预检隔离、抗原阴性解释、住院恶化识别和有限资源下的门诊筛选。每例 7 个连续决策，共 28 个节点。</p>
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
          <div class="chat-log" id="chatLog"><div class="bubble owner">它已经打过两针疫苗，而且第一次细小检测还是阴性，为什么你们还要隔离并建议住院？是不是医院太谨慎了？</div></div>
          <textarea id="doctorReply" placeholder="解释：为什么两针不等于完成保护、阴性为何不能单独排除、当前危险点和下一步计划。"></textarea>
          <div class="actions"><button id="scoreReply" class="primary">提交沟通</button><button id="resetChat" class="secondary">重置模拟</button></div>
        </article>
        <aside class="coach"><h3>评分维度</h3><div id="commScore"><p>提交后从风险解释、检测边界、同理心和下一步计划四个维度给反馈。</p></div></aside>
      </div>
    </section>

    <section id="review" class="panel">
      <div class="grid two">
        <article class="card"><h2>基础班复盘题</h2><ul><li>为什么没有血便仍不能排除犬细小？</li><li>为什么疑似病例要在检测结果前隔离？</li><li>首次抗原阴性时，哪些因素会让你继续高度怀疑？</li><li>液体计划为什么必须分为复苏、缺失、维持和持续丢失？</li><li>为什么不能长期禁食或只依靠止吐药处理持续呕吐？</li><li>抗菌药在 CPV 中针对什么风险，而不是针对什么？</li><li>怎样从 CBC、生化和灌注指标判断病例正在恶化？</li><li>门诊和出院分别需要满足哪些条件？</li></ul></article>
        <article class="card"><h2>产品体验观察点</h2><ul><li>用户是否真正建立“先隔离再检测”的顺序？</li><li>化验解读是否能从单值转向趋势和临床状态？</li><li>治疗管理是否能从“开药清单”转向问题、目标、复查和调整闭环？</li><li>四个病例是否覆盖初诊、假阴性、恶化和资源限制？</li><li>宠主沟通能否同时解释疫苗、检测和住院理由？</li></ul></article>
      </div>
      <article class="card"><h2>能力边界</h2><div class="tag-row"><span class="tag">隔离路径</span><span class="tag">严重度判断</span><span class="tag">报告趋势</span><span class="tag">治疗闭环</span><span class="tag">门诊筛选</span><span class="tag">院感沟通</span></div><p class="disclaimer">教学提示：真实犬细小管理取决于患者灌注、持续丢失、血糖、电解质、白细胞趋势、并发症、医院监护能力和当地可用药物。所有液体、抗菌药、止吐、镇痛、营养及生物制剂均由执业兽医制定。</p></article>
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
      id: 'triage',
      title: '病例 1 · 前台预警',
      short: '在污染候诊区前识别风险',
      level: '基础',
      levelClass: '',
      patient: '豆包 · 混种犬 · 4 月龄 · 4.8 kg',
      objective: '训练目标：从电话信息启动隔离，并完成稳定性、免疫和暴露史评估。',
      summary: { focus: '疑似即隔离，不等血便或阳性', trap: '让幼犬进入普通候诊区后再检测', transfer: '所有高传染性主诉都先设计患者动线' },
      stages: [
        makeStage(stageNames[0], '电话里先识别', '主人来电说豆包昨晚呕吐 4 次，今天精神差、拉稀，只打过两针疫苗。', '前台最合理的安排是？', '通知医护并安排独立入口/隔离区，不进入普通候诊区', '先在候诊区排队，轮到后再说', '没有血便，按普通胃肠炎接诊', '幼犬、免疫不完整和急性胃肠症状已构成高风险组合，隔离不应等待抗原结果。', '传播控制从电话开始。', { history: ['4 月龄', '仅接种两针', '急性呕吐和腹泻'] }),
        makeStage(stageNames[1], '补全免疫时间线', '主人只记得两针分别在 7 周龄和 10 周龄，幼犬一周前从宠物市场带回。', '这说明什么？', '免疫程序尚未完成且存在高密度来源暴露', '已经打两针，肯定完全免疫', '宠物市场来源与传染病风险无关', '母源抗体可能干扰早期疫苗，幼犬需要完成规定年龄后的系列免疫；高密度来源增加暴露概率。', '“打过”不是完整免疫史。', { history: ['7 周龄和 10 周龄接种', '一周前来自宠物市场'] }),
        makeStage(stageNames[2], '先看稳定性', '隔离区检查：可站立但反应偏慢，约 7% 脱水，黏膜粉红，脉搏稍弱，血糖 3.2 mmol/L。', '最需要优先关注什么？', '低灌注趋势与低血糖，边稳定边完成检查', '只看粪便颜色', '等抗原阳性后再处理低血糖', '患者已出现脱水、脉弱和低血糖，稳定措施与诊断采样应并行。', '检查不能延误可逆危险。', { exam: ['可站立但反应偏慢', '约 7% 脱水、脉搏稍弱', '血糖 3.2 mmol/L'] }),
        makeStage(stageNames[3], '首轮检查组合', '豆包仍在呕吐，腹部轻度弥漫不适。', '首轮检查怎样组合？', '粪便抗原、CBC、生化/电解质/血糖，并按腹痛和病程决定影像与粪检', '只做细小抗原', '直接做完整 CT，不评估床旁风险', '抗原回答病原支持，CBC 和生化回答严重度；影像用于持续腹痛或机械性疾病鉴别。', '诊断与严重度是两个问题。', { tests: ['计划粪便抗原', 'CBC、生化、电解质和血糖', '按指征腹部影像/粪检'] }),
        makeStage(stageNames[4], '整合初诊报告', '抗原阳性；WBC 2.1，中性粒细胞 0.8 ×10⁹/L；血糖 3.1，钾 3.3 mmol/L，白蛋白 2.4 g/dL。', '怎样概括？', 'CPV 感染并伴白细胞减少、低血糖、低钾和蛋白丢失风险', '只是轻度腹泻', '抗原阳性已经足够，不需要看其他指标', '这些异常共同决定支持治疗强度和监测频率，不能只记录“细小阳性”。', '阳性之后才开始严重度分层。', { tests: ['CPV 抗原阳性', 'WBC 2.1、中性粒细胞 0.8', '低血糖、低钾、低白蛋白'] }),
        makeStage(stageNames[5], '形成问题清单', '豆包能站立但持续呕吐，家庭还有一只未完成免疫幼犬。', '工作判断首要包含什么？', '犬细小病毒性肠炎，伴脱水和代谢异常；需要隔离、支持治疗并保护同住幼犬', '只写“腹泻待查”', '回家与另一只幼犬共同观察', '问题清单必须同时覆盖患者严重度和传播风险。', '传染病诊断有个体和群体两条线。', { assessment: ['犬细小病毒性肠炎', '脱水、低血糖、低钾和白细胞减少', '同住幼犬暴露风险'] }),
        makeStage(stageNames[6], '解释为何建议住院', '主人说豆包还能站，想打一针就回家。', '怎样沟通最准确？', '它目前已有低血糖、电解质和白细胞异常，且仍在呕吐；住院便于持续纠正丢失并及时发现休克或感染恶化', '细小一定会死亡，所以必须住院', '能站就表示没有危险', '用现有异常和监测目标解释，而不是用恐吓或空泛结论。', '给主人看得见的决策依据。', { assessment: ['向主人解释住院目标和恶化指标', '讨论同住犬隔离与免疫评估'] })
      ]
    },
    {
      id: 'negative',
      title: '病例 2 · 首测阴性',
      short: '高疑似不能被一次阴性结束',
      level: '进阶',
      levelClass: 'analysis',
      patient: '奶糖 · 比格犬 · 3 月龄 · 3.9 kg',
      objective: '训练目标：运用检测前概率解释抗原阴性，并保留隔离与鉴别诊断。',
      summary: { focus: '检测结果必须放进病程和风险背景', trap: '阴性即撤隔离', transfer: '所有快速检测都要理解假阴性窗口' },
      stages: [
        makeStage(stageNames[0], '阴性前仍先隔离', '奶糖来自犬舍，同窝两只幼犬确诊细小；今天厌食、呕吐，首次稀便，前台抗原阴性。', '是否可以撤销隔离？', '不可以，检测前概率很高，应继续隔离并评估', '可以，阴性代表绝对没有病毒', '让它去普通犬区等待复查', '明确暴露、年龄和症状使检测前概率很高，一次阴性不足以安全排除。', '先看概率，再看结果。', { history: ['同窝两只幼犬确诊 CPV', '今日出现厌食、呕吐和首次稀便', '首次抗原阴性'] }),
        makeStage(stageNames[1], '定位检测时间', '症状开始约 8 小时，采样时只有少量水样便；末次改良活疫苗为 9 天前。', '哪条最重要？', '病程早且样本稀少，可能处于抗原检测假阴性窗口；近期疫苗史也需按试剂说明解释', '疫苗会让所有品牌检测永远阳性', '水样便一定提高敏感性', '早期排毒量和大量稀便的稀释效应都可能影响结果；疫苗影响取决于检测方法与产品。', '记录采样与病程时间。', { history: ['发病约 8 小时', '少量水样便样本', '9 天前接种改良活疫苗'] }),
        makeStage(stageNames[2], '体检不能等复测', '奶糖约 6% 脱水，体温 39.6°C，腹部轻度不适，循环尚可。', '现在怎样处理？', '继续隔离，先按临床状态支持并完成严重度检查', '没有阳性结果就不能治疗脱水', '直接送回犬舍等待血便', '支持治疗针对患者当前异常，不需要等待病原完全确认。', '病原不确定不等于患者不需要处理。', { exam: ['约 6% 脱水', '体温 39.6°C', '轻度腹部不适、循环尚可'] }),
        makeStage(stageNames[3], '下一步检测策略', '需要提高或降低 CPV 概率，同时排除其他病因。', '哪组计划合理？', 'CBC/生化和粪检，按病程重复抗原或送 PCR，并按腹痛决定影像', '每小时重复同一快速检测直到阳性', '不做其他检查', '连续临床和化验资料能调整概率；复测/PCR要结合时间与样本，鉴别诊断不能丢。', '阴性后扩大证据，不是机械刷试纸。', { tests: ['CBC、生化和粪检', '计划按病程复测抗原或 PCR', '按指征腹部影像'] }),
        makeStage(stageNames[4], '趋势改变判断', 'WBC 从昨日 7.2 降至 3.0，中性粒细胞 1.1 ×10⁹/L；12 小时后腹泻加重，重复抗原阳性。', '怎样解释？', '病程进展后证据支持 CPV，初次阴性很可能与早期/采样条件有关', '两次检测互相矛盾，均无价值', '白细胞下降只代表脱水', '暴露史、症状进展、白细胞趋势和复测结果形成一致证据链。', '趋势能补上单次检测的盲区。', { tests: ['WBC 7.2→3.0', '中性粒细胞 1.1', '12 小时后抗原转阳'] }),
        makeStage(stageNames[5], '保留并发病鉴别', '奶糖确诊 CPV，但出现局灶性腹痛和反复干呕。', '下一步是否只按细小处理？', '不能，应评估异物、套叠等机械性并发问题', '抗原阳性解释所有腹部症状', '只要有腹泻就不会有异物', '病原阳性并不排斥共病；局灶腹痛和顽固干呕需要重新定位。', '阳性结果也可能造成锚定偏差。', { assessment: ['确诊 CPV', '局灶腹痛和干呕需排查机械性问题'] }),
        makeStage(stageNames[6], '解释第一次为什么阴性', '主人怀疑医院第一次检测做错了。', '怎样回答最合适？', '快速检测有时间窗和样本限制；第一次处于发病早期，我们因高风险没有撤隔离，并用复测和趋势补全证据', '第一次一定是操作失误', '阴性结果完全不该做', '承认检测边界并说明为什么当时仍采取保护措施，比否定任何一次结果更准确。', '把不确定性转化为复查计划。', { assessment: ['向主人解释检测时间窗与复测理由', '说明隔离基于整体风险而非单一结果'] })
      ]
    },
    {
      id: 'deterioration',
      title: '病例 3 · 住院恶化',
      short: '从趋势识别休克和脓毒症',
      level: '急重',
      levelClass: 'urgent',
      patient: '可可 · 拉布拉多犬 · 5 月龄 · 8.2 kg',
      objective: '训练目标：识别低灌注、重度中性粒细胞减少和代谢异常的组合风险。',
      summary: { focus: '生命体征和趋势优先于“已经确诊”', trap: '把恶化当作细小正常过程', transfer: '住院病例每次复查都要重新分诊' },
      stages: [
        makeStage(stageNames[0], '住院也要重新分诊', '可可住院第 2 天突然反应迟钝、四肢冰冷，体温 36.4°C。', '第一反应是什么？', '按新的急症状态立即重新评估 ABC、灌注和血糖', '已确诊细小，按原计划等查房', '低体温说明炎症已经结束', '低体温和意识恶化可能代表休克、低血糖或脓毒症，不能视为普通波动。', '每次状态改变都重新分诊。', { history: ['CPV 住院第 2 天', '突然反应迟钝、四肢冰冷'] }),
        makeStage(stageNames[1], '回看输入和持续丢失', '夜间腹泻 7 次、呕吐 2 次，体重比早晨低 0.4 kg，尿量减少。', '这组记录说明什么？', '持续丢失可能未被充分匹配，灌注正在恶化', '输液泵在运行就不会脱水', '体重下降与液体平衡无关', '固定输液速度不能自动覆盖不断变化的腹泻、呕吐和摄入。', '液体方案靠重新核算。', { history: ['夜间大量腹泻并呕吐', '体重下降 0.4 kg', '尿量减少'] }),
        makeStage(stageNames[2], '组合识别休克', '脉弱、CRT 3 秒、收缩压 78 mmHg，黏膜灰粉，血糖 2.6 mmol/L。', '当前最优先的问题是？', '低灌注性休克并伴低血糖', '只有轻度脱水', '先等白细胞结果再处理', '多项灌注指标和低血压一致，低血糖可进一步造成神经症状。', '不要让单个指标延误组合判断。', { exam: ['脉弱、CRT 3 秒、黏膜灰粉', '收缩压 78 mmHg', '血糖 2.6 mmol/L'] }),
        makeStage(stageNames[3], '床旁复查与并发症', '团队开始复苏，需要同时寻找恶化原因和可纠正异常。', '哪组复查最合理？', '血糖、乳酸/灌注、CBC、PCV/TS、生化电解质、酸碱，并检查腹部并发症和所有出入量', '只复查抗原是否仍阳性', '只拍一张胸片', '严重度由灌注、代谢、细胞和持续丢失共同决定，抗原不会回答这些问题。', '确诊后检查重心转向严重度。', { tests: ['计划血糖、乳酸和酸碱', 'CBC、PCV/TS、生化电解质', '复核腹部与全部出入量'] }),
        makeStage(stageNames[4], '识别脓毒症风险', 'WBC 0.9、中性粒细胞 0.2；乳酸 5.2，白蛋白 1.8，钾 3.0 mmol/L。', '怎样概括？', '休克伴重度中性粒细胞减少、低蛋白、低钾和高乳酸，高度警惕脓毒症', '只有白细胞低，其他无需处理', '白蛋白低说明补液过多且与肠道无关', '肠屏障破坏、重度中性粒细胞减少和低灌注组合使感染与器官功能恶化风险显著升高。', '把数字放回病理链条。', { tests: ['WBC 0.9、中性粒细胞 0.2', '乳酸 5.2、白蛋白 1.8', '钾 3.0'] }),
        makeStage(stageNames[5], '处理优先级', '可可仍持续腹泻，腹部弥漫疼痛。', '当前管理思路是什么？', '升级复苏和监护，纠正血糖/电解质与持续丢失，评估感染风险、镇痛营养及腹部并发症', '只把输液速度翻倍后不复查', '停止所有监测让幼犬休息', '当前是多问题急症，需要目标明确的组合支持并按反应反复调整。', '重症方案是连续闭环，不是一次处方。', { assessment: ['CPV 重症伴低灌注性休克', '高度警惕脓毒症', '低血糖、低钾、低蛋白和持续丢失'] }),
        makeStage(stageNames[6], '阶段性预后沟通', '主人问“昨天还稳定，今天是不是没希望了？”', '怎样回答？', '今天出现新的休克和感染风险，病情确实升级；我们会根据复苏后血压、乳酸、血糖、尿量和精神反应持续更新预后', '肯定没救了', '昨天稳定，所以今天也不用担心', '既要明确恶化事实，也要给出接下来可观察的反应指标和更新时间点。', '不回避风险，也不做绝对保证。', { assessment: ['向主人说明病情升级及当前措施', '用复苏反应和连续指标更新预后'] })
      ]
    },
    {
      id: 'outpatient',
      title: '病例 4 · 门诊筛选',
      short: '有限资源下仍要守住安全边界',
      level: '综合',
      levelClass: 'infection',
      patient: '旺仔 · 中华田园犬 · 6 月龄 · 7.1 kg',
      objective: '训练目标：判断门诊方案的患者条件、家庭能力、隔离要求和升级标准。',
      summary: { focus: '门诊是结构化方案，不是简单回家', trap: '只按费用决定住院或门诊', transfer: '资源受限时更需要明确纳入和退出标准' },
      stages: [
        makeStage(stageNames[0], '先排除不适合门诊', '旺仔抗原阳性，呕吐已控制 8 小时，可饮少量水，精神差但可行走，循环稳定。主人无法承担完整住院。', '第一步是什么？', '按客观严重度和门诊协议评估资格，而不是只按费用决定', '费用不足就直接回家', '所有细小都必须采用同一方案', '门诊方案可作为照护谱的一部分，但前提是患者稳定且有可靠复诊和升级能力。', '资源讨论不能替代医学筛选。', { history: ['CPV 抗原阳性', '呕吐已控制 8 小时', '费用限制'] }),
        makeStage(stageNames[1], '评估照护能力', '主人住在诊所附近，有独立房间，无其他犬，可每日带来复诊并记录摄入、呕吐、腹泻和尿量。', '这条信息的意义是？', '满足部分门诊执行和隔离条件，但仍需结合体检化验', '家庭条件与治疗成功无关', '没有其他犬就不需要消毒', '门诊依赖照护者执行、交通和隔离能力；这些是正式纳入条件。', '患者和家庭要同时合格。', { history: ['可每日复诊', '有独立隔离空间', '可记录输入输出，无其他犬'] }),
        makeStage(stageNames[2], '确认当前稳定', '旺仔黏膜粉红、脉搏有力、CRT 1.5 秒，约 5% 脱水，血糖正常，无局灶腹痛。', '怎样理解？', '当前无休克和低血糖证据，可继续评估门诊资格', '完全没有风险，不需要复诊', '5% 脱水一定需要重症监护', '当前稳定支持门诊可能性，但细小可快速变化，不能取消每日评估和升级标准。', '稳定是当前状态，不是未来保证。', { exam: ['循环稳定、CRT 1.5 秒', '约 5% 脱水', '血糖正常、无局灶腹痛'] }),
        makeStage(stageNames[3], '建立门诊基线', '需要确定是否存在隐藏的严重异常。', '最低限度应包含什么？', 'CBC、血糖/生化电解质、体重和水合基线，并建立每日复诊记录', '不需要任何化验', '只记录抗原阳性', '基线用于筛出中性粒细胞严重减少、低血糖、电解质异常和后续恶化。', '门诊更需要可比较的基线。', { tests: ['CBC、生化、电解质和血糖基线', '体重、水合和生命体征基线', '每日复诊记录'] }),
        makeStage(stageNames[4], '判断可否纳入', 'WBC 5.2、中性粒细胞 3.1；血糖 5.0、钾 3.8 mmol/L，白蛋白 2.8 g/dL。', '当前结论是什么？', '结合稳定体检和可靠照护，可按本院门诊协议管理并严密复诊', '化验正常，所以不需要治疗', '白细胞没低就说明不是细小', '这些结果暂未显示重度并发症，但病原已确认且仍需结构化支持和趋势监测。', '门诊资格不等于轻视疾病。', { tests: ['WBC 5.2、中性粒细胞 3.1', '血糖、电解质和白蛋白暂可接受'] }),
        makeStage(stageNames[5], '明确退出标准', '主人准备带旺仔回家。', '哪组必须写进升级说明？', '反复呕吐无法摄入、不能站立/反应差、四肢凉、血便或腹泻明显增加、少尿及无法按时复诊', '只有死亡才需要回院', '只要每天来打针就不用观察', '门诊安全依赖照护者能识别并立即响应恶化，说明必须具体可观察。', '退出标准要能被非医护执行。', { assessment: ['当前可纳入门诊协议', '已制定每日复诊和立即升级标准'] }),
        makeStage(stageNames[6], '家庭隔离沟通', '主人问康复后能不能马上带去小区草地玩。', '怎样回答？', '恢复期仍按医院要求隔离和清洁，避免污染公共环境；与兽医确认排毒风险、洗护和后续免疫计划后再恢复活动', '不拉稀就立刻没有传染性', '只要喷香水就能消毒', '临床改善与传播风险并非同一时间点，公共区域和未完成免疫犬需要保护。', '出院不等于院感结束。', { assessment: ['解释恢复期隔离和环境管理', '安排后续免疫与复查'] })
      ]
    }
  ];

  const savedCaseResults = JSON.parse(localStorage.getItem('cpvTrainerCaseResults') || '{}');
  const state = {
    activeTab: 'overview',
    caseIndex: 0,
    caseStep: 0,
    caseScore: 0,
    answered: false,
    caseFinished: false,
    completedSections: new Set(JSON.parse(localStorage.getItem('cpvTrainerSections') || '[]')),
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
    localStorage.setItem('cpvTrainerSections', JSON.stringify([...state.completedSections]));
    tabs.forEach(button => button.classList.toggle('active', button.dataset.tab === id));
    navButtons.forEach(button => button.classList.toggle('active', button.dataset.jump === id));
    panels.forEach(panel => panel.classList.toggle('active', panel.id === id));
    updateProgress();
  }

  function updateProgress() {
    const sectionProgress = Math.round((state.completedSections.size / 8) * 60);
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

  const reportButtons = document.querySelectorAll('[data-cpv-report]');
  const reportCases = document.querySelectorAll('#labs .report-case');
  reportButtons.forEach(button => button.addEventListener('click', () => {
    reportButtons.forEach(item => item.classList.toggle('active', item === button));
    reportCases.forEach(item => item.classList.toggle('active', item.id === button.dataset.cpvReport));
  }));

  document.querySelectorAll('[data-cpv-feedback] .lab-option').forEach(option => {
    option.addEventListener('click', () => {
      const question = option.closest('[data-cpv-feedback]');
      const isCorrect = option.dataset.correct === 'true';
      question.querySelectorAll('.lab-option').forEach(item => {
        item.disabled = true;
        if (item.dataset.correct === 'true') item.classList.add('correct');
      });
      if (!isCorrect) option.classList.add('wrong');
      const box = question.querySelector('.lab-feedback');
      box.innerHTML = '<b>' + (isCorrect ? '判断正确' : '重新把化验与患者状态连接起来') + '</b><br>' + question.dataset.cpvFeedback;
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
    localStorage.setItem('cpvTrainerCaseResults', JSON.stringify(state.caseResults));
    state.caseFinished = true;
    state.completedSections.add('quiz');
    localStorage.setItem('cpvTrainerSections', JSON.stringify([...state.completedSections]));
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
  const ownerPrompt = '它已经打过两针疫苗，而且第一次细小检测还是阴性，为什么你们还要隔离并建议住院？是不是医院太谨慎了？';

  function scoreCommunication(text) {
    const rules = [
      { name: '风险解释', words: ['幼犬', '疫苗', '免疫', '暴露', '传染', '隔离'], max: 25 },
      { name: '检测边界', words: ['阴性', '早期', '时间', '复测', '概率', '样本'], max: 25 },
      { name: '同理心', words: ['理解', '担心', '我们', '一起', '目前'], max: 25 },
      { name: '下一步计划', words: ['血糖', '白细胞', '补液', '监测', '复查', '住院'], max: 25 }
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
    commScore.innerHTML = '<p><b>沟通得分：' + total + '/100</b></p>' + result.map(item => '<div class="score-item"><span>' + item.name + '：' + item.score + '/25</span><div class="score-line"><span style="width:' + item.score * 4 + '%"></span></div></div>').join('') + '<p>建议思路：我理解你担心住院和隔离是否过度。幼犬打过两针仍可能处于保护不完整的阶段；快速检测也有早期假阴性窗口，所以我们要结合暴露史、症状和白细胞趋势。现在隔离是为了保护其他犬，住院建议则取决于脱水、血糖、电解质、白细胞和持续呕吐等实际风险。我们会用复测和连续监测更新判断。</p>';
    state.completedSections.add('client');
    localStorage.setItem('cpvTrainerSections', JSON.stringify([...state.completedSections]));
    updateProgress();
  });

  resetChat.addEventListener('click', () => {
    doctorReply.value = '';
    chatLog.innerHTML = '<div class="bubble owner">' + ownerPrompt + '</div>';
    commScore.innerHTML = '<p>提交后从风险解释、检测边界、同理心和下一步计划四个维度给反馈。</p>';
  });

  renderCase();
  updateProgress();
  document.body.style.visibility = 'visible';
})();
