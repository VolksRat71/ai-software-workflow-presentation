const fs = require('fs');
const path = require('path');

const baseDir = './CoPilot_Deep_Dive/Productivity';

const steps = [
  {
    dir: '1_Explaining_Class_Component',
    mdFile: 'class_component_explanation.md',
    jsFile: 'example_class_component.js',
    mdContent: '# Explaining a Complex React Class Component\n\nTODO: Document the content.',
    jsContent: '// Example of a complex React class component\n\n'
  },
  {
    dir: '2_Functional_Conversion_with_Hooks',
    mdFile: 'functional_conversion_with_hooks.md',
    jsFile: 'example_functional_with_hooks.js',
    mdContent: '# Converting the Component to React Functional with Hooks\n\nTODO: Document the content.',
    jsContent: '// Example of the same component converted to functional with hooks\n\n'
  },
  {
    dir: '3_Documenting_Component',
    mdFile: 'documenting_the_component.md',
    jsFile: 'example_documented_component.js',
    mdContent: '# Adding Comments to the Component\n\nTODO: Document the content.',
    jsContent: '// Example of the functional component with added documentation\n\n'
  },
  {
    dir: '4_Integrating_with_NextJS',
    mdFile: 'integrating_with_nextjs.md',
    jsFile: 'example_nextjs_component.js',
    mdContent: '# Converting the Component to Work with Next.js\n\nTODO: Document the content.',
    jsContent: '// Example of the component adapted for Next.js\n\n'
  }
];

// Ensure base directory exists
if (!fs.existsSync(baseDir)) {
  console.error(`The directory "${baseDir}" doesn't exist. Please make sure you're in the right location.`);
  process.exit(1);
}

// Create directories and files
steps.forEach(step => {
  const dirPath = path.join(baseDir, step.dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  const mdFilePath = path.join(dirPath, step.mdFile);
  if (!fs.existsSync(mdFilePath)) {
    fs.writeFileSync(mdFilePath, step.mdContent);
  }

  const jsFilePath = path.join(dirPath, step.jsFile);
  if (!fs.existsSync(jsFilePath)) {
    fs.writeFileSync(jsFilePath, step.jsContent);
  }
});

console.log('Directories and files structured successfully.');
