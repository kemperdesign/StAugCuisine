// App.tsx (only the relevant parts shown as a full replacement pattern)
import React, { useState } from "react";
import BottomNav, { TabKey } from "./components/BottomNav";
import Dashboard from "./components/Dashboard";
import IngredientManager from "./components/IngredientManager";
import RecipeManager from "./components/RecipeManager";
import MenuItemManager from "./components/MenuItemManager";
import PurchaseManager from "./components/PurchaseManager";
import InventoryManager from "./components/InventoryManager";
import ParManager from "./components/ParManager";
import PrepSheetManager from "./components/PrepSheetManager";
import UsageReport from "./components/print/PrintUsageReport";
import PointOfSale from "./components/PointOfSale";   // NEW
import ChefTools from "./components/ChefTools";       // NEW
import { useFoodData } from "./hooks/useFoodData";

const App: React.FC = () => {
  const [tab, setTab] = useState<TabKey>("dashboard");

  const {
    loaded,
    ingredients, recipes, menuItems, purchases, inventory,
    addIngredient, updateIngredient, deleteIngredient,
    addRecipe, updateRecipe, deleteRecipe,
    addMenuItem, updateMenuItem, deleteMenuItem,
    addPurchase, updatePurchase, deletePurchase,
    updateInventoryItem, deleteInventoryItem,
    getIngredientName, exportData, importData,
    // keep your calculator from the hook
    // @ts-ignore
    calculateRecipeCost,
  } = useFoodData();

  if (!loaded) return <div className="p-6 text-zinc-300">Loading…</div>;

  return (
    <div className="min-h-screen bg-zinc-900 pb-16">
      <div className="max-w-6xl mx-auto p-4">
        {tab === "dashboard" && (
          <Dashboard recipes={recipes} calculateRecipeCost={calculateRecipeCost} />
        )}
        {tab === "ingredients" && (
          <IngredientManager
            ingredients={ingredients}
            addIngredient={addIngredient}
            updateIngredient={updateIngredient}
            deleteIngredient={deleteIngredient}
          />
        )}
        {tab === "recipes" && (
          <RecipeManager
            recipes={recipes}
            ingredients={ingredients}
            addRecipe={addRecipe}
            updateRecipe={updateRecipe}
            deleteRecipe={deleteRecipe}
            calculateRecipeCost={calculateRecipeCost}
            getIngredientName={getIngredientName}
          />
        )}
        {tab === "menu" && (
          <MenuItemManager
            menuItems={menuItems}
            recipes={recipes}
            addMenuItem={addMenuItem}
            updateMenuItem={updateMenuItem}
            deleteMenuItem={deleteMenuItem}
          />
        )}
        {tab === "pos" && <PointOfSale menuItems={menuItems} recipes={recipes} />}{/* NEW */}
        {tab === "purchases" && (
          <PurchaseManager
            purchases={purchases}
            addPurchase={addPurchase}
            updatePurchase={updatePurchase}
            deletePurchase={deletePurchase}
          />
        )}
        {tab === "inventory" && (
          <InventoryManager
            inventory={inventory}
            updateInventoryItem={updateInventoryItem}
            deleteInventoryItem={deleteInventoryItem}
            getIngredientName={getIngredientName}
          />
        )}
        {tab === "pars" && <ParManager recipes={recipes} />}
        {tab === "prep" && <PrepSheetManager recipes={recipes} />}
        {tab === "reports" && <UsageReport />}
        {tab === "print" && <div className="text-zinc-300">Use the print pages as before.</div>}
        {tab === "settings" && (
          <div className="text-zinc-300">Settings go here. Export/Import: coming soon.</div>
        )}
        {tab === "tools" && <ChefTools />}{/* NEW */}
      </div>

      <BottomNav active={tab} onChange={setTab} />
    </div>
  );
};

export default App;
