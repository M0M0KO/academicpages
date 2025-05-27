---
title: "Multi-modal Medical Image Analysis for Cancer Research"
excerpt: "Learning medical image analysis techniques for tumor detection and segmentation, focusing on integrating CT scans with clinical data."
header:
  teaser: 
collection: projects
category: medical
date: 2024-04-01
permalink: /projects/multimodal-medical/
repository: "https://github.com/M0M0KO/multi-modal-medical"
---

## Project Overview

This project involves learning advanced medical image analysis techniques at the First Affiliated Hospital of Wenzhou Medical University. The focus is on understanding systems for tumor detection, with particular emphasis on how to integrate different types of medical data for comprehensive analysis.

### Learning Objectives:

- Understand segmentation algorithms for hepatocellular and renal cell carcinoma
- Explore techniques for combining clinical tabular data with imaging features
- Learn multi-modal fusion approaches to integrate different CT scan phases
- Gain experience with 3D volumetric segmentation methods for anatomical analysis

## Technical Exploration Areas

The project covers several key areas in medical image analysis:

### 1. Segmentation Techniques
Learning both 2D and 3D segmentation approaches, including U-Net variants and multi-scale architectures specifically optimized for tumor boundary detection in CT scans.

### 2. Multi-modal Data Integration
Exploring methods that combine structured clinical data (lab results, patient history) with unstructured imaging data to improve diagnostic accuracy.

### 3. Multiple CT Phase Analysis
Studying techniques for analyzing multiple CT scan phases (arterial, venous, delayed) to leverage the temporal information in contrast enhancement patterns.

### 4. 3D Volumetric Analysis
Learning approaches for comprehensive volumetric analysis that maintain spatial relationships across CT slices for improved tumor characterization.

## Implementation Focus

```python
class MultiPhaseIntegration(nn.Module):
    """A module for integrating features from multiple CT phases"""
    
    def __init__(self, in_channels, fusion_type='attention'):
        super(MultiPhaseIntegration, self).__init__()
        self.fusion_type = fusion_type
        
        if fusion_type == 'attention':
            self.attention = CrossPhaseAttention(in_channels)
        elif fusion_type == 'concat':
            self.reduction = nn.Conv3d(in_channels * 3, in_channels, 1)
        else:
            self.fusion = nn.Parameter(torch.ones(3) / 3)
            
    def forward(self, x_art, x_ven, x_del):
        # x_art: arterial phase features
        # x_ven: venous phase features
        # x_del: delayed phase features
        
        if self.fusion_type == 'attention':
            return self.attention(x_art, x_ven, x_del)
        elif self.fusion_type == 'concat':
            x_concat = torch.cat([x_art, x_ven, x_del], dim=1)
            return self.reduction(x_concat)
        else:  # weighted average
            return self.fusion[0] * x_art + self.fusion[1] * x_ven + self.fusion[2] * x_del
```

## Current Status

This project represents ongoing learning and exploration in the field of medical image analysis (as of April 2024). I am currently focused on understanding state-of-the-art approaches and their applications to specific clinical problems.

## Technical Stack

- **Programming:** Python, PyDicom, NumPy
- **Deep Learning:** PyTorch, TensorFlow
- **Medical Imaging:** SimpleITK, ITK-SNAP
- **Visualization:** VTK, Matplotlib
- **Analysis:** scikit-learn, scikit-image

## Learning Resources

- Medical image segmentation research papers and tutorials
- Multi-modal data fusion techniques from recent literature
- Guidance from medical professionals for clinical context
- Open-source medical imaging datasets for practice 