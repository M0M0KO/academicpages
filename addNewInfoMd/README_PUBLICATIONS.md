# Publications Guide

This guide explains how to use the updated publications system in your academic website.

## Enhanced Publication Features

The publications system has been upgraded with several new features:

1. **Categorized Publications**: Papers are automatically grouped into categories (journals, conferences, manuscripts)
2. **Filterable Interface**: Users can filter publications by category and year
3. **Rich Metadata**: Support for additional information like authors, DOI, topics, and more
4. **Visual Enhancements**: Topic badges, clickable buttons for resources, and collapsible citation sections
5. **Responsive Layout**: Better display on both desktop and mobile devices

## Publication Front Matter Fields

Each publication markdown file supports the following front matter fields:

```yaml
---
title: "Your Paper Title"
collection: publications
permalink: publications/YYYY-MM-DD-paper-slug/
excerpt: 'A brief one or two sentence summary of your paper'
date: YYYY-MM-DD
venue: 'Journal or Conference Name'
paperurl: 'https://link-to-your-paper.pdf'
slidesurl: 'https://link-to-your-slides.pdf'
posterurl: 'https://link-to-your-poster.pdf'
codeurl: 'https://github.com/yourusername/your-repo'
videourl: 'https://youtube.com/your-video-id'
bibtexurl: 'https://link-to-bibtex.bib'
citation: 'Author1, Author2. (YYYY). "Paper Title." <i>Journal Name</i>. pp-pp.'
category: 'journals|conferences|manuscripts'
authors: 'Full author list with names'
topics: 'Topic1, Topic2, Topic3'
doi: '10.xxxx/xxxxx'
header:
  teaser: 'image-filename.png'
---
```

### Required Fields

- `title`: Your paper title
- `collection`: Always set to "publications"
- `permalink`: Unique URL for the publication page
- `date`: Publication date in YYYY-MM-DD format
- `category`: One of the predefined categories (journals, conferences, manuscripts)

### Optional Fields (Highly Recommended)

- `excerpt`: Brief summary of the paper
- `venue`: Journal or conference name
- `citation`: Complete citation in your preferred style
- `authors`: Full author list
- `topics`: Comma-separated list of research topics (will appear as badges)
- `header.teaser`: Image thumbnail for your paper (placed in images/publications/)

### Resource Links (Add as needed)

- `paperurl`: Link to the PDF of your paper
- `slidesurl`: Link to presentation slides
- `posterurl`: Link to research poster
- `codeurl`: Link to code repository
- `videourl`: Link to presentation video
- `bibtexurl`: Link to BibTeX citation file
- `doi`: Digital Object Identifier (without the https://doi.org/ prefix)

## How to Add a New Publication

1. Create a new markdown file in the `_publications` folder named `YYYY-MM-DD-paper-slug.md`
2. Fill in the front matter with your publication details
3. Add teaser images to `images/publications/` folder (recommended size: 500x300px)
4. Write your publication content in markdown format after the front matter

## Example Publication Content

After the front matter, you can structure your publication page with sections like:

```markdown
## Abstract

Your paper abstract goes here...

## My Contribution

Describe your specific contribution to this research...

## Key Innovations

- First key innovation or finding
- Second key innovation or finding
- Third key innovation or finding

[Additional information if needed]
```

## Publication Categories

To modify the available categories, edit the `_config.yml` file and update the `publication_category` section:

```yaml
publication_category:
  journals:
    title: 'Journal Articles'
  conferences:
    title: 'Conference Papers'
  manuscripts:
    title: 'Manuscripts Under Review'
  # Add more categories as needed
``` 