---
layout: single
title: "发布新论文指南"
permalink: /add-publication-guide/
author_profile: false
---

# 如何添加新论文到您的学术网站

本指南详细介绍了如何将新的学术论文添加到您的网站上。我们已经优化了网站的出版物展示系统，使其更加美观和功能齐全。

## 添加新论文的步骤

### 1. 准备论文信息

首先，收集您的论文信息，包括：
- 论文标题
- 出版日期（或提交/接受日期）
- 期刊/会议名称
- 作者列表
- 摘要
- DOI（如果已发表）
- 论文链接（如果可公开获取）
- 代码仓库链接（如果有）
- 相关研究主题/关键词
- 您对该研究的贡献

### 2. 创建Markdown文件

1. 在`_publications`文件夹中创建一个新的Markdown文件
2. 文件命名格式：`YYYY-MM-DD-简短标识.md`
   - 例如：`2024-06-deep-learning-cancer.md`
   - 日期应为发表日期（或预计发表日期）
   - 简短标识应简洁且能反映论文内容

### 3. 添加前置信息（Front Matter）

在Markdown文件的开头添加以下格式的前置信息：

```yaml
---
title: "您的论文标题"
collection: publications
permalink: publications/YYYY-MM-DD-简短标识/
excerpt: '简短的论文摘要（1-2句话）'
date: YYYY-MM-DD
venue: '期刊或会议名称（加上状态，如"已发表"、"修订中"、"审稿中"等）'
paperurl: '论文PDF链接（如有）'
codeurl: '代码仓库链接（如有）'
slidesurl: '演示幻灯片链接（如有）'
videourl: '演讲视频链接（如有）'
bibtexurl: 'BibTeX引用文件链接（如有）'
citation: '作者1, 作者2, 等. (年份). &quot;论文标题.&quot; <i>期刊名称</i>. 页码/DOI/状态.'
category: 'journals或conferences或manuscripts'
authors: '完整作者列表'
topics: '主题1, 主题2, 主题3'
doi: 'DOI号码（如有）'
header:
  teaser: '缩略图文件名.png'
---
```

#### 必填字段
- `title`: 论文标题
- `collection`: 固定为"publications"
- `permalink`: 论文页面的永久链接
- `date`: 出版日期
- `category`: 论文类别（journals/conferences/manuscripts）

#### 推荐填写字段
- `excerpt`: 论文简短摘要
- `venue`: 期刊/会议名称
- `citation`: 完整引用格式
- `authors`: 完整作者列表
- `topics`: 研究主题标签（逗号分隔）

### 4. 添加论文内容

在前置信息后，添加论文的详细内容：

```markdown
## 摘要

您的论文摘要...

## 我的贡献

描述您对这项研究的具体贡献...

## 关键创新点

- 第一个创新点或研究发现
- 第二个创新点或研究发现
- 第三个创新点或研究发现

[其他相关信息]
```

### 5. 添加缩略图

1. 创建一个代表您论文的图像（推荐尺寸：500x300像素）
2. 将图像保存到`images/publications/`文件夹
3. 文件命名应简洁且与论文相关（如：`immune-cell-analysis.png`）
4. 在论文前置信息中的`header.teaser`字段引用此图像

### 6. 使用markdown_generator工具（可选）

如果您有多篇论文需要添加，可以使用`markdown_generator`文件夹中的工具：

1. 更新`publications.tsv`文件，添加新论文的信息
2. 运行`python publications.py`生成Markdown文件
3. 检查生成的文件并根据需要进行修改

## 论文分类说明

您的论文将根据`category`字段自动分类：

- `journals`: 已在期刊发表的文章
- `conferences`: 会议论文
- `manuscripts`: 预印本或在审稿中的论文

## 示例

### 前置信息示例

```yaml
---
title: "Multi-omics and Machine Learning-driven CD8+ T Cell Heterogeneity Score for Prognosis"
collection: publications
permalink: publications/2024-12-multiomics-machine-learning/
excerpt: '使用多组学和机器学习开发CD8+ T细胞异质性评分，用于改善头颈部鳞状细胞癌的预后。'
date: 2024-12-01
venue: 'Molecular Therapy Nucleic Acids'
paperurl: 'https://doi.org/10.1016/j.omtn.2024.102413'
codeurl: 'https://github.com/yourusername/CD8-score'
citation: 'He D, Yang Z, Zhang T, Luo Y, Peng L, Yan J, et al. (2024). &quot;Multi-omics and Machine Learning-driven CD8+ T Cell Heterogeneity Score for Prognosis.&quot; <i>Molecular Therapy Nucleic Acids</i>. DOI: 10.1016/j.omtn.2024.102413'
category: journals
authors: 'Dongming He, Zhihong Yang, Tianyu Zhang, Yunling Luo, Lei Peng, Jiatao Yan, Tian Qiu, Jiayi Zhang, Li Qin, Zihao Liu, Xuanfang Zhang, Lixuan Lin, Miao Sun'
topics: '多组学, 机器学习, 免疫治疗, 头颈部鳞状细胞癌, T细胞异质性'
doi: '10.1016/j.omtn.2024.102413'
header:
  teaser: 'cd8-tcell-teaser.png'
---
```

### 内容示例

```markdown
## 摘要

头颈部鳞状细胞癌(HNSCC)的异质性对治疗构成重大挑战，突显了对更精确和个性化治疗方法的迫切需求。CD8+ T细胞作为肿瘤免疫微环境的重要组成部分，已成为免疫治疗的关键靶点。我们的研究建立了CD8+ T细胞评分降低与不良临床预后之间的相关性，凸显了这一生物标志物的预后价值。通过分析与CD8+ T细胞相关的基因表达，我们将HNSCC区分为冷肿瘤和热肿瘤亚型，揭示了临床预后和免疫治疗反应的差异。

## 我的贡献

实现并优化了多种机器学习算法(LASSO, RF, GB, KNN, SVM, GBM, XGBoost, DT)，用于在HNSCC研究中识别关键基因。

## 主要发现

- CD8+ T细胞评分可作为HNSCC预后的独立预测因子
- 通过多种机器学习方法识别了OLR1作为关键基因
- 辛伐他汀和帕唑帕尼可能是OLR1的潜在抑制剂，为HNSCC个体提供创新治疗途径
```

## 常见问题解答

1. **如何确定论文类别？**
   - 已正式发表的论文 → journals
   - 会议发表的论文 → conferences
   - 待审查或预印本 → manuscripts

2. **没有论文PDF怎么办？**
   - 可以省略`paperurl`字段，或链接到期刊页面

3. **如何处理论文摘要过长的情况？**
   - `excerpt`保持简短（1-2句话）
   - 完整摘要放在内容部分的"摘要"段落中

4. **如何添加多个主题标签？**
   - 在`topics`字段中用逗号分隔多个主题

5. **如何更新已有的论文信息？**
   - 直接编辑相应的Markdown文件
   - 确保保留原始的`permalink`和`date`字段以维持链接一致性

如需更多帮助，请参考[完整的网站维护文档](/maintenance-guide/)。 