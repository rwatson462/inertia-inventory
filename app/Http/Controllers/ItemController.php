<?php

namespace App\Http\Controllers;

use App\Models\InventoryItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ItemController
{
    public function create()
    {
        // todo: get any required data here

        return Inertia::render('Items/Create');
    }

    public function store(Request $request)
    {
        $itemData = $request->validate([
            'name' => 'required|string',
        ]);

        $item = Auth::user()->inventoryItems()->create($itemData);

        return redirect(route('items.view', $item));
    }

    public function view(InventoryItem $item)
    {
        return Inertia::render('Items/View', ['item' => $item]);
    }
}
