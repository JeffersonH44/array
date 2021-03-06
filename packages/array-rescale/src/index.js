import max from 'ml-array-max';
import min from 'ml-array-min';

export default function rescale(input, options = {}) {
    if (!Array.isArray(input)) {
        throw new TypeError('input must be an array');
    }
    let output;
    if (options.output !== undefined) {
        if (!Array.isArray(options.output)) {
            throw new TypeError('output option must be an array if specified');
        }
        output = options.output;
    } else {
        output = new Array(input.length);
    }

    const minValue = options.min === undefined ? 0 : options.min;
    const maxValue = options.max === undefined ? 1 : options.max;

    if (minValue >= maxValue) {
        throw new RangeError('min option must be smaller than max option');
    }

    const currentMin = min(input);
    const currentMax = max(input);

    if (currentMin === currentMax) {
        throw new RangeError('minimum and maximum input values are equal. Cannot rescale a constant array');
    }

    const factor = (maxValue - minValue) / (currentMax - currentMin);
    for (var i = 0; i < input.length; i++) {
        output[i] = (input[i] - currentMin) * factor + minValue;
    }

    return output;
}
