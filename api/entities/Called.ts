export class Called {
  public _id?: string
  public clientId: string
  public number: string
  public subject: string
  public openedDate: Date
  public closedDate: Date
  public status: string
  public category: string
  public image: string
  public evaluation: number
  public conversations: Array<Object>

  constructor(props: Called) {
    Object.assign(this, props)
  }
}
