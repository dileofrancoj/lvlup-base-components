export interface Props {
  defaultValue?: number // 1
  max: number // max de 10 elementos
  min?: number // iniciamos en 1
  onStepperChange: (value: number) => void
  withTrashIcon?: boolean
  onTrashClick: () => void
}
