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
            "transaction_id" => $this->transaction_id,
            "inOutCat" => $this->inOutCat,
            "amount" => $this->amount,
            "description" => $this->description,
            "priority" => $this->priority,
            "transaction_date" => $this->transaction_date
        ];
    }
}
