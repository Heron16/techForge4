export abstract class TaskManager {
  protected tasks: { type: string; name: string }[] = [];
  protected uniqueNames: Set<string> = new Set();

  abstract addTask(task: string): void;
  abstract listTasks(): string[];

  protected addUniqueTask(name: string, type: string): void {
    if (!name) return;
    if (!this.uniqueNames.has(name)) {
      this.uniqueNames.add(name);
      this.tasks.push({ type, name });
    }
  }

  protected getTaskNames(): string[] {
    return this.tasks.map((t) => t.name);
  }
}

export class Project extends TaskManager {
  addTask(task: string): void {
    this.addUniqueTask(task, 'project');
  }

  listTasks(): string[] {
    return this.getTaskNames();
  }
}

export class DailyTasks extends TaskManager {
  addTask(task: string): void {
    this.addUniqueTask(task, 'daily');
  }

  listTasks(): string[] {
    return this.getTaskNames();
  }
}

// ----------------------------

export abstract class Inventory {
  protected items: Record<string, number> = {};

  abstract addItem(item: string, quantity: number): void;
  abstract removeItem(item: string): void;
  abstract getInventory(): Record<string, number>;

  protected getCopy(): Record<string, number> {
    return { ...this.items };
  }
}

export class WarehouseInventory extends Inventory {
  addItem(item: string, quantity: number): void {
    if (!item || quantity <= 0) return;
    const current = this.items[item] ?? 0;
    this.items[item] = current + quantity;
  }

  removeItem(item: string): void {
    delete this.items[item];
  }

  getInventory(): Record<string, number> {
    return this.getCopy();
  }
}

export class StoreInventory extends Inventory {
  private static readonly LIMIT_PER_ITEM = 10;

  addItem(item: string, quantity: number): void {
    if (!item || quantity <= 0) return;
    const current = this.items[item] ?? 0;
    const next = current + quantity;
    this.items[item] = Math.min(next, StoreInventory.LIMIT_PER_ITEM);
  }

  removeItem(item: string): void {
    delete this.items[item];
  }

  getInventory(): Record<string, number> {
    return this.getCopy();
  }
}

// ----------------------------

export abstract class FavoriteManager {
  protected favorites: string[] = [];

  abstract addFavorite(item: string): void;
  abstract getFavorites(): string[];
}

export class MoviesFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    if (!item) return;
    if (!this.favorites.includes(item)) {
      this.favorites.push(item);
      this.favorites.sort((a, b) => a.localeCompare(b));
    }
  }

  getFavorites(): string[] {
    return [...this.favorites];
  }
}

export class BooksFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    if (!item) return;
    this.favorites.unshift(item);
  }

  getFavorites(): string[] {
    return [...this.favorites];
  }
}

// ----------------------------

export abstract class VoteSystem {
  protected votes: Record<string, number> = {};

  abstract voteFor(candidate: string): void;
  abstract getResults(): object;
}

export class Election extends VoteSystem {
  voteFor(candidate: string): void {
    if (!candidate) return;
    this.votes[candidate] = (this.votes[candidate] ?? 0) + 1;
  }

  getResults(): object {
    return { ...this.votes };
  }
}

export class Poll extends VoteSystem {
  voteFor(candidate: string): void {
    if (!candidate) return;
    this.votes[candidate] = (this.votes[candidate] ?? 0) + 1;
  }

  getResults(): object {
    const entries = Object.entries(this.votes);
    entries.sort(([, a], [, b]) => b - a);
    return entries.map(([name]) => name);
  }
}