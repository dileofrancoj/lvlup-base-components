const ComponentType = {
  ATOMS: 'atoms',
  MOLECULES: 'molecules'
}

const ComponentFolder = {
  [ComponentType.ATOMS]: 'atoms',
  [ComponentType.MOLECULES]: 'molecules'
}

const StoryPath = {
  [ComponentType.ATOMS]: 'Atoms',
  [ComponentType.MOLECULES]: 'Molecules'
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (plop) => {
  plop.setGenerator('component', {
    description: 'Create new UI component',
    prompts: [
      { // le preguntamos al usuario el nombre
        type: 'input',
        name: 'name',
        message: 'Enter the component name'
      }, // le preguntamos al usuario que tipo de componente es
      {
        type: 'list',
        choices: Object.values(ComponentType),
        name: 'ComponentType',
        message: 'Enter the type of the component'
      }
    ],
    actions: [
      {
        // addMany me deja hacer muchas acciones de una
        // https://plopjs.com/documentation/#addmany
        type: 'addMany',
        destination: 'src/{{ComponentFolder ComponentType}}/{{name}}',
        base: 'plop-templates/component',
        templateFiles: 'plop-templates/component/*.hbs'
      }
    ]
  })
  plop.setHelper('ComponentFolder', componentType => ComponentFolder[componentType])

  // prettier-ignore
  plop.setHelper(
    'storyPath',
    componentType => StoryPath[componentType]
  )
}
