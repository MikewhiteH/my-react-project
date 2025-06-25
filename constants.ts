
import { WorkExperienceItem, CareerOutlook, Post } from './types'; // EducationItem removed from import

export const SITE_TITLE: string = "白鹤 | 简历"; // 更通用的“作品集”
export const AUTHOR_NAME: string = "毕豪";

export const INTRO_TEXT = {
  greeting: "您好，我是毕豪",
  tagline: " ",
  bio: "我具备IT软硬件运维与工业视觉系统调试的扎实经验，并拥有利用Python (OpenCV, MediaPipe) 进行计算机视觉项目开发的学术背景（详见下方学士学位项目）。毕业于湖北汽车工业学院计算机科学与技术专业，致力于为全球客户提供专业、高效的技术支持与解决方案，并期望在国际化的舞台上持续发展。"
};

export const WORK_EXPERIENCES_DATA: WorkExperienceItem[] = [
  {
    id: 'exp_zhaoyi',
    company: '杭州兆奕科技公司',
    role: '视觉助理工程师',
    duration: '2024年8月 - 2025年3月 (预期)',
    description: `
      <div class="prose prose-sm sm:prose-base max-w-none text-slate-600">
        <p>在此职位中，我主要负责机器视觉系统的现场调试、集成与维护，确保生产线上视觉检测任务的高效与稳定运行。具体职责涵盖：</p>
        <ul class="list-disc list-inside space-y-1 mt-2">
          <li><strong>视觉系统调试与优化：</strong>精确调校工业相机（如曝光、增益）及光源等关键参数，优化图像采集质量，以适应不同检测场景需求。</li>
          <li><strong>上位机软件保障：</strong>负责上位机视觉应用软件的日常调试、配置与维护，确保软件与硬件系统的协同工作及数据通讯的流畅性。</li>
          <li><strong>视觉算法应用与标定：</strong>执行精确的视觉标定流程（如手眼标定、九点标定），并对Cognex VisionPro等视觉软件库中的内置算法（如Blob分析、边缘检测、模式匹配）进行参数优化与调试，提升检测精度与稳定性。</li>
          <li><strong>电气系统支持：</strong>具备扎实的电气基础，能够解读电气原理图，并依据图纸参与控制柜内相关电气元件的配线与初步搭建工作。</li>
          <li><strong>IT基础设施运维：</strong>提供公司内部IT运维支持，包括诊断并解决PC硬件故障、安装配置Windows操作系统及各类应用软件。</li>
        </ul>
      </div>
    `,
    logoUrl: 'https://picsum.photos/seed/zhaoyitech/80/80' // 建议替换为兆奕科技的真实logo或相关图标
  },
  {
    id: 'bachelor_project_hci',
    company: '学士学位研究项目 (获“校级优秀毕业论文”荣誉)',
    role: '基于计算机视觉的手势识别与人机交互系统研发',
    duration: '本科毕业设计 (2024年毕业)',
    description: `
      <div class="prose prose-sm sm:prose-base max-w-none text-slate-600">
        <p>作为湖北汽车工业学院计算机科学与技术专业的学士学位研究项目，本项目旨在通过计算机视觉技术，开发一套创新的非接触式电脑控制系统。</p>
        <ul class="list-disc list-inside space-y-1 mt-2">
          <li><strong>核心技术实现：</strong>运用 Python 语言，深度结合 OpenCV 与 MediaPipe 库，通过预训练深度学习模型对实时视频流中的手势进行精准识别与追踪。</li>
          <li><strong>系统功能：</strong>将识别的手势动态转化为电脑操作指令，如模拟鼠标移动、点击、滚动以及键盘输入等，实现对计算机的非接触式控制。</li>
          <li><strong>项目成果：</strong>成功构建了一套高效、便捷的人机交互界面。该研究成果及详细阐述的论文《基于计算机视觉的手势识别与人机交互系统研发》被评为“校级优秀毕业论文”，充分展现了在计算机视觉应用、独立项目开发及技术研究方面的综合潜力。</li>
        </ul>
      </div>
    `,
    logoUrl: 'https://picsum.photos/seed/bachelorproject/80/80' // 建议替换为学校logo或项目相关图标
  }
];

export const SKILLS_HIGHLIGHTS_CONTENT: string = `
  <div class="prose prose-sm sm:prose-base max-w-none text-slate-600 space-y-6">
    <div>
      <h3 class="text-xl font-semibold text-slate-700 mb-2 !mt-0">语言能力</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>英语 (工作语言级别)：</strong>听说读写精通 (TOEIC <strong>840分</strong> / CET-4)，能够自信流畅地进行深度技术交流、撰写全英文技术文档、参与国际项目会议并直接支持全球客户。</li>
        <li><strong>日语 (基本沟通)：</strong>无障碍沟通。</li>
      </ul>
    </div>
    <div>
      <h3 class="text-xl font-semibold text-slate-700 mb-2">技术支持与系统运维</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>工业视觉系统：</strong>Cognex VisionPro 系统调试与集成，手眼标定，视觉算法参数优化（如Blob分析、边缘检测、模式匹配）。</li>
        <li><strong>软硬件运维：</strong>PC硬件故障诊断与排除 (内存、硬盘等)，Windows操作系统安装、配置、故障排除及各类应用软件支持。</li>
        <li><strong>电气基础：</strong>熟练解读电气图纸，具备控制柜基础配盘与接线能力。</li>
      </ul>
    </div>
    <div>
      <h3 class="text-xl font-semibold text-slate-700 mb-2">编程与开发</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>主要编程语言：</strong>Python, C#, C。</li>
        <li><strong>项目开发经验：</strong>计算机视觉应用 (OpenCV, MediaPipe)，人机交互 (HCI) 系统原型开发。</li>
        <li><strong>基础 Web 技术：</strong>了解 HTML, CSS, JavaScript。</li>
      </ul>
    </div>
  </div>
`;

export const CAREER_OUTLOOK_DATA: CareerOutlook = {
  title: "职业发展与展望",
  content: `
    <div class="prose prose-sm sm:prose-base max-w-none text-slate-600">
      <p>我期望成为一名<strong>国际技术支持工程师</strong>或担任相关技术服务职位，专注于需要与全球客户或团队进行深入技术沟通与协作的领域。</p>
      <p>凭借上述在机器视觉、IT运维及编程方面的综合技能，结合卓越的英语沟通能力 (TOEIC 840分)，我相信自己能够胜任以下工作：</p>
      <ul class="list-disc list-inside space-y-1 mt-3">
        <li>高效诊断并解决客户在全球项目中遇到的复杂软硬件及系统集成技术问题。</li>
        <li>清晰、准确地提供多语言（中/英）技术指导和解决方案，有效克服潜在的语言与文化障碍。</li>
        <li>与国际化团队紧密协作，推动项目顺利实施，确保并提升客户满意度。</li>
        <li>积极追踪并学习前沿技术动态，以适应快速变化的全球市场和多样化的客户需求。</li>
      </ul>
      <p>我渴望在一个能够充分发挥我技术专长和语言优势的国际化平台工作，为公司的全球业务拓展贡献力量，并实现个人职业价值的持续提升。</p>
    </div>
  `
};

// Education Data - Not currently rendered by HomePage.tsx in the provided file dump, but data is prepared.
// If you wish to display this, you'll need to add a new section in pages/HomePage.tsx
export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  major: string;
  graduationYear: string;
  details?: string[]; // HTML content for honors, thesis, etc.
  logoUrl?: string;
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'hubei_auto_uni',
    institution: '湖北汽车工业学院',
    degree: '工学学士',
    major: '计算机科学与技术',
    graduationYear: '2024年',
    details: [
      '荣获“校级优秀毕业论文”荣誉',
      '学士学位论文: 《基于计算机视觉的手势识别与人机交互系统研发》'
    ],
    // logoUrl: 'path/to/uni_logo.png' // Optional: Add university logo
  }
];


// BLOG_POSTS constant is kept as an empty array to prevent breaking
// components/BlogPostCard.tsx or pages/PostPage.tsx if they are still part of the project structure,
// even though they are not actively used in the single-page portfolio.
export const BLOG_POSTS: Post[] = [];
