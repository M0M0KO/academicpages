# 添加新论文的工作流程

## 快速开始

### 方法一：手动创建（推荐用于单篇论文）

1. 在`_publications`文件夹中创建新文件：`2024-01-01-论文标识.md`（使用实际日期替换）
2. 复制下面的模板并填写您的论文信息：

```yaml
---
title: "论文标题"
collection: publications
permalink: publications/2024-01-01-论文标识/
excerpt: '简短摘要（1-2句话）'
date: 2024-01-01
venue: '期刊名称 (状态)'
paperurl: 'https://doi.org/...'
codeurl: 'https://github.com/...'
citation: '作者列表. (2024). &quot;论文标题.&quot; <i>期刊名称</i>.'
category: journals  # 或 conferences 或 manuscripts
authors: '完整作者列表'
topics: '主题1, 主题2, 主题3'
doi: '10.xxxx/xxxxx'
header:
  teaser: '图片名称.png'
---

## 摘要

您的论文摘要...

## 我的贡献

您对研究的贡献...
```

3. 在`images/publications/`文件夹中添加论文缩略图（推荐尺寸：500x300像素）

### 方法二：使用TSV和脚本（适合批量添加）

1. 编辑`markdown_generator/publications.tsv`文件，添加新行
2. 确保填写所有必要字段，尤其是：
   - `pub_date`：发表日期（2024-01-01格式，使用实际日期）
   - `title`：论文标题
   - `venue`：发表期刊/会议
   - `url_slug`：用于生成文件名和URL的简短标识
   - `category`：论文类别
3. 运行脚本生成markdown文件：
   ```
   cd markdown_generator
   python publications.py
   ```
4. 检查生成的文件并补充缺少的信息

## 必填字段说明

| 字段 | 说明 | 示例 |
|------|------|------|
| `title` | 论文标题 | "Machine Learning Identifies Exosome Features Related to Hepatocellular Carcinoma" |
| `collection` | 固定为"publications" | publications |
| `permalink` | 永久链接 | publications/2022-09-machine-learning-exosome/ |
| `date` | 发表日期 | 2022-09-01 |
| `category` | 论文类别 | journals |

## 类别列表

- `journals`：期刊文章
- `conferences`：会议论文
- `manuscripts`：在审稿中或预印本

## 文件命名规范

- 使用发表日期（或预计发表日期）作为前缀
- 使用连字符分隔的短语作为标识符
- 确保标识符简洁且能反映论文内容

示例：
- `2022-09-machine-learning-exosome.md`
- `2024-12-multiomics-machine-learning.md`
- `2023-07-deep-learning-cancer.md`

## 缩略图要求

- 尺寸：推荐500x300像素
- 格式：PNG或JPG
- 文件名：与论文内容相关
- 位置：保存在`images/publications/`文件夹

## 检查清单

添加新论文后，请确认：

- [ ] Markdown文件已保存在`_publications`文件夹中
- [ ] 所有必填字段已完整填写
- [ ] 缩略图已添加到正确位置
- [ ] 论文分类正确（journals/conferences/manuscripts）
- [ ] 论文内容（摘要、贡献）已添加
- [ ] 检查网站上是否正确显示

## 常见错误解决

1. **论文不显示**：检查`category`字段是否匹配`_config.yml`中的定义
2. **缩略图不显示**：确认图片路径正确，文件名与front matter中的名称一致
3. **排序问题**：检查`date`字段格式是否为正确的日期格式（如2024-01-01）
4. **过滤器不生效**：确保年份在年份过滤器选项中已列出
5. **构建错误**：避免在日期字段中使用不正确的占位符，应使用实际日期 