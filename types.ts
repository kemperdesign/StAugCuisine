// FIX: Removed a self-import statement from this file that was causing declaration conflicts.

export enum Unit {
  // Mass
  MILLIGRAM = 'mg',
  GRAM = 'g',
  KILOGRAM = 'kg',
  OUNCE = 'oz',
  POUND = 'lb',
  // Volume
  MILLILITER = 'ml',
  LITER = 'l',
  TEASPOON = 'tsp',
  TABLESPOON = 'tbsp',
  CUP = 'cup',
  FLUID_OUNCE = 'fl oz',
  PINT = 'pt',
  QUART = 'qt',
  GALLON = 'gal',
  // Count
  EACH = 'each',
}

export interface Ingredient {
  id: string;
  name: string;
  unit: Unit;
  costPerUnit: number;
  parLevel?: number;
}

export interface RecipeIngredient {
  ingredientId: string;
  quantity: number;
}

export interface Recipe {
  id: string;
  name: string;
  ingredients: RecipeIngredient[];
  yieldQuantity: number;
  yieldUnit: string;
  description: string;
  parLevel?: number; // How many units of this recipe to keep on hand
}

export interface MenuItem {
  id: string;
  name: string;
  recipeId: string;
  sellingPrice: number;
}

export interface Purchase {
  id: string;
  ingredientId: string;
  quantity: number;
  cost: number;
  purchaseDate: string;
}

export interface InventoryItem {
  ingredientId: string;
  quantity: number;
}

export interface WasteEntry {
  id: string;
  menuItemId: string;
  quantity: number;
  date: string;
  cost: number;
}

export interface ExportData {
  ingredients: Ingredient[];
  recipes: Recipe[];
  menuItems: MenuItem[];
  purchases: Purchase[];
  inventory: InventoryItem[];
  waste: WasteEntry[];
}

export interface Recipe {
  id: string;
  name: string;
  description?: string;
  yieldQuantity: number;
  yieldUnit: string;           // “servings”, “liters”, etc.
  par?: number;
  ingredients: RecipeIngredient[];

  // NEW
  servingSizeQuantity?: number; // e.g., 12
  servingSizeUnit?: Unit | string; // e.g., "oz", "cup", or "serving"
  showOnDashboard?: boolean;
}
