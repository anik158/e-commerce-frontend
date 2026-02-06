import { Plus, Minus } from 'lucide-react';

const QuantitySelector = ({ quantity, maxQuantity, onQuantityChange }) => {
  return (
    <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => onQuantityChange(-1)}
        disabled={quantity <= 1}
        className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="w-16 h-12 flex items-center justify-center font-semibold text-lg border-x-2 border-gray-200">
        {quantity}
      </span>
      <button
        onClick={() => onQuantityChange(1)}
        disabled={quantity >= maxQuantity}
        className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default QuantitySelector;