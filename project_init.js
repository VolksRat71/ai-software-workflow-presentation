const fs = require('fs');

function createWorkspace() {
  const workspaceName = 'AI_in_SE_Workflow';
  const directories = [
    'Introduction',
    'AI_in_Software_Development',
    'CoPilot_Deep_Dive/Productivity',
    'CoPilot_Deep_Dive/Debugging',
    'CoPilot_Deep_Dive/Prototyping_with_MUI',
    'GPT-4_vs_CoPilot_Debugging',
    'Interactive_Session',
    'Conclusion_and_Future_Implications',
    'Q&A',
    'Resources_and_References'
  ];
  const files = [
    { path: 'Introduction/README.md', content: 'An introductory file explaining the purpose and overview of the repository.' },
    { path: 'AI_in_Software_Development/AI_Benefits.md', content: 'A detailed overview of the role of AI in software development.' },
    { path: 'CoPilot_Deep_Dive/Productivity/code_completion.md', content: 'Demonstrations of CoPilot\'s real-time code suggestion capabilities.' },
    { path: 'CoPilot_Deep_Dive/Productivity/documentation.md', content: 'Examples of CoPilot\'s ability to generate comments and docstrings.' },
    { path: 'CoPilot_Deep_Dive/Productivity/code_patterns.md', content: 'Showcase of CoPilot recognizing and suggesting common coding patterns.' },
    { path: 'CoPilot_Deep_Dive/Debugging/error_detection.md', content: 'Code snippets with common errors and CoPilot\'s detection and solution suggestions.' },
    { path: 'CoPilot_Deep_Dive/Debugging/code_refactoring.md', content: 'Examples of verbose functions and CoPilot\'s refactored versions.' },
    { path: 'CoPilot_Deep_Dive/Debugging/error_messages.md', content: 'Demonstration of how CoPilot interprets and suggests fixes for error messages.' },
    { path: 'CoPilot_Deep_Dive/Prototyping_with_MUI/component_generation.md', content: 'Demonstrations of CoPilot generating boilerplate MUI components.' },
    { path: 'CoPilot_Deep_Dive/Prototyping_with_MUI/styling_with_mui.md', content: 'Examples of CoPilot\'s theme-based styling suggestions for MUI.' },
    { path: 'CoPilot_Deep_Dive/Prototyping_with_MUI/mui_patterns.md', content: 'Demonstration of CoPilot recognizing common MUI patterns and suggesting relevant components.' },
    { path: 'GPT-4_vs_CoPilot_Debugging/debugging_comparison.md', content: 'A detailed comparison of debugging capabilities between GPT-4 and CoPilot.' },
    { path: 'Interactive_Session/sample_tasks.md', content: 'List of sample tasks for interactive sessions with CoPilot.' },
    { path: 'Interactive_Session/live_feedback.md', content: 'Placeholder for noting down feedback during the presentation.' },
    { path: 'Conclusion_and_Future_Implications/conclusion.md', content: 'Summary of the benefits and future implications of AI in software engineering.' },
    { path: 'Q&A/questions.md', content: 'Frequently asked questions and their answers post-presentation.' },
    { path: 'Resources_and_References/resources.md', content: 'Additional useful links and references related to the topic.' }
  ];

  // Create the workspace directory
  fs.mkdirSync(workspaceName);

  // Create the directories
  directories.forEach((dir) => {
    fs.mkdirSync(`${workspaceName}/${dir}`, { recursive: true });
  });

  // Create the files
  files.forEach((file) => {
    fs.writeFileSync(`${workspaceName}/${file.path}`, file.content);
  });

  console.log(`Workspace '${workspaceName}' created successfully.`);
}

createWorkspace();
