export interface ITodo {
  isComplete?: boolean;
  priority?: string;
  completionDate?: Date;
  creationDate?: Date;
  description: string;
  projectTags?: Array<string>;
  contextTags?: Array<string>;
  specialTags?: Array<string>;
}

export default class Todo implements ITodo {

  isComplete?: boolean;
  priority?: string;
  completionDate?: Date;
  creationDate?: Date;
  description: string;
  projectTags?: Array<string>;
  contextTags?: Array<string>;
  specialTags?: Array<string>;

  constructor(s?: string) {
    this.isComplete = false;
    this.priority = undefined;
    this.completionDate = undefined;
    this.creationDate = new Date();
    this.description = '';
    this.projectTags = [];
    this.contextTags = [];
    this.specialTags = [];


    if (s) {
      this.load(s);
    } else {
      this.creationDate = new Date();
    }
  }

  load(data: string): void {
    const line = data.trim();
    const tokens = line.split(/\s+/).map(s => s.trim());

    this.isComplete = false;
    if (tokens[0] === 'x') {
      this.isComplete = true;
      tokens.shift();
    }

    this.priority = undefined;
    if (tokens[0].startsWith('(')) {
      this.priority = tokens[0];
      tokens.shift();
    }

    if (this.isComplete && tokens.length > 1) {
      const completionDate = new Date(tokens[0]);
      if (completionDate) {
        this.completionDate = completionDate;
        tokens.shift();
      }
    }

    const creationDate = new Date(tokens[0]);
    if (creationDate) {
      this.creationDate = creationDate;
      tokens.shift();
    }

    // this.projectTags = []; // @
    // this.contextTags = []; // +
    // this.specialTags = []; // key:value

    this.description = tokens.join(' ');
  }

  public toString = (): string => {
    return `${this.isComplete ? 'x' : ''} ${this.priority ? this.priority : ''} ${this.completionDate ? this.completionDate.toISOString().split('T')[0] : ''} ${this.creationDate ? this.creationDate.toISOString().split('T')[0] : ''} ${this.description} ${this.projectTags ? this.projectTags : ''} ${this.contextTags ? this.contextTags : ''} ${this.specialTags ? this.specialTags : ''}`;
  }

  public equals(todo: ITodo): boolean {

    if (todo)
    {
      if (this.completionDate === todo.completionDate
          && this.contextTags === todo.contextTags
          && this.creationDate === todo.creationDate
          && this.description === todo.description
          && this.isComplete === todo.isComplete
          && this.priority === todo.priority
          && this.projectTags === todo.projectTags
          && this.specialTags === todo.specialTags) {
            return true;
          }
    }

    return false;
  }
}
