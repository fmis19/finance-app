<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->transaction_id,
            "type" => $this->inOutCat->type,
            "name" => $this->inOutCat->name,
            "amount" => $this->amount,
            "description" => $this->description,
            "priority" => $this->priority,
            "date" => $this->transaction_date
        ];
    }
}
