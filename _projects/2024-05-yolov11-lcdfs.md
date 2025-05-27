---
title: "YOLOv11-LCDFS: Enhanced Smoking Detection With Low-light Enhancement"
excerpt: "An exploration in improving YOLO for better performance in diverse lighting conditions, with a focus on low-light cigarette detection."
header:
  teaser: 
collection: projects
category: vision
date: 2024-05-01
permalink: /projects/yolov11-lcdfs/
repository: "https://github.com/M0M0KO/YOLOv11-LCDFS"
---

## Project Overview

Building on my undergraduate smoking detection research, this project focuses on improving object detection capabilities in complex lighting conditions. I'm exploring various modifications to the YOLO architecture to enhance detection performance in low-light environments.

### Key Objectives:

- Develop an adapted YOLO-based architecture with integrated low-light enhancement
- Design and implement custom attention mechanisms for focusing on critical visual features under poor lighting
- Explore improved loss functions specifically calibrated for low-light detection scenarios
- Optimize upsampling techniques to preserve details in dark environments

## Technical Approach

The project centers around several key innovations:

### 1. Lightweight Low-Light Enhancement Module
Instead of a separate preprocessing step, I'm integrating a lightweight enhancement module directly into the detection pipeline, making it more efficient and end-to-end trainable.

### 2. Custom Attention Mechanisms
Comparing different attention mechanisms (GAM, CBAM, ECA, CoordAtt) to determine which provides the best guidance for the network to focus on relevant features under challenging lighting.

### 3. Adaptive Loss Function
Developing a modified loss function that gives additional weight to difficult low-light samples during training, helping the model become more sensitive to subtle features in dark conditions.

### 4. Optimized Upsampling
Implementing advanced upsampling techniques like CARAFE and DySample to improve feature reconstruction in the detection head, preserving more details in dark regions.

## Implementation Details

```python
class LCDFS(nn.Module):
    """Low-light Cigarette Detection Feature System"""
    
    def __init__(self, in_channels, mid_channels):
        super(LCDFS, self).__init__()
        # Low-light enhancement module
        self.enhancement = LightEnhancementModule(in_channels)
        
        # Feature extraction with attention
        self.conv1 = Conv(in_channels, mid_channels)
        self.attention = CBAM(mid_channels)
        
        # Dynamic upsampling
        self.upsample = DynamicUpsample(mid_channels)
        
    def forward(self, x):
        # Enhance low-light features
        x_enhanced = self.enhancement(x)
        
        # Feature extraction
        feat = self.conv1(x_enhanced)
        feat_att = self.attention(feat)
        
        # Upsampling
        out = self.upsample(feat_att)
        return out
```

## Current Status

This project is actively in development (as of May 2024) and represents ongoing research into improving object detection in challenging lighting conditions. Preliminary results have shown promising improvements in detection accuracy in low-light environments.

## Technical Stack

- **Framework:** PyTorch
- **Base Architecture:** YOLOv8 with custom modifications
- **Key Components:** Custom attention mechanisms, adaptive loss functions, dynamic upsampling
- **Training:** CUDA-accelerated on custom dataset with various lighting conditions
- **Evaluation Metrics:** mAP across different lighting scenarios

## Future Directions

- Explore additional attention mechanism combinations
- Investigate more sophisticated light estimation techniques
- Test performance on a wider range of real-world low-light scenarios
- Benchmark against state-of-the-art low-light enhancement methods 