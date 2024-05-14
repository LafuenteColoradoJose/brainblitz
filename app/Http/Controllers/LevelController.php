<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Level;
use Inertia\Response;
use App\Http\Requests\LevelRequest;

class LevelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    const NUMBER_OF_ITEMS_PER_PAGE = 5;
    public function index()
    {
        $levels = Level::paginate(self::NUMBER_OF_ITEMS_PER_PAGE);
        return inertia('Levels/Index', ['levels' => $levels]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Levels/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LevelRequest $request)
    {
        Level::create($request->validated());
        return redirect()->route('levels.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Level $level)
    {
        return inertia('Levels/Edit', ['level' => $level]);
    }
  

    /**
     * Update the specified resource in storage.
     */
    public function update(LevelRequest $request, Level $level)
    {
        $level->update($request->validated());
        return redirect()->route('levels.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Level $level)
    {
        $level->delete();
        return redirect()->route('levels.index');
    }
    
}
