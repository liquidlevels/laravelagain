<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
	    $products = Products::all();
	    return $products;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
	    $products = new Products();
	    $products->nombre = #request->nombre;
	    $products->precio = #request->precio;
	    $products->cantidad = #request->cantidad;
	    $products->marca = #request->marcas
	    $products->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
	    $products = Products::find($id);
	    return $products;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
	    $products = Products::findOrFail($request->id);
	    $products->nombre = #request->nombre;
	    $products->precio = #request->precio;
	    $products->cantidad = #request->cantidad;
	    $products->marca = #request->marcas
		
        $products->save();
	    return $productos;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
	    $products = Products::destroy($id);
	    return $products;
    }
}
