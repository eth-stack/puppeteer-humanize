import { z } from "zod";
export declare const DelaySchema: z.ZodObject<{
    chance: z.ZodDefault<z.ZodNumber>;
    min: z.ZodNumber;
    max: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    max: number;
    min: number;
    chance: number;
}, {
    max: number;
    min: number;
    chance?: number | undefined;
}>;
export declare const TypeMistakeSchema: z.ZodObject<{
    chance: z.ZodDefault<z.ZodNumber>;
    delay: z.ZodDefault<z.ZodObject<{
        chance: z.ZodDefault<z.ZodNumber>;
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        max: number;
        min: number;
        chance: number;
    }, {
        max: number;
        min: number;
        chance?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    chance: number;
    delay: {
        max: number;
        min: number;
        chance: number;
    };
}, {
    chance?: number | undefined;
    delay?: {
        max: number;
        min: number;
        chance?: number | undefined;
    } | undefined;
}>;
export declare const TypeIntoSchema: z.ZodObject<{
    mistakes: z.ZodDefault<z.ZodObject<{
        chance: z.ZodDefault<z.ZodNumber>;
        delay: z.ZodDefault<z.ZodObject<{
            chance: z.ZodDefault<z.ZodNumber>;
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            chance: number;
        }, {
            max: number;
            min: number;
            chance?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        chance: number;
        delay: {
            max: number;
            min: number;
            chance: number;
        };
    }, {
        chance?: number | undefined;
        delay?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
    }>>;
    delays: z.ZodDefault<z.ZodObject<{
        all: z.ZodDefault<z.ZodObject<{
            chance: z.ZodDefault<z.ZodNumber>;
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            chance: number;
        }, {
            max: number;
            min: number;
            chance?: number | undefined;
        }>>;
        complete: z.ZodDefault<z.ZodObject<{
            chance: z.ZodDefault<z.ZodNumber>;
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            chance: number;
        }, {
            max: number;
            min: number;
            chance?: number | undefined;
        }>>;
        space: z.ZodDefault<z.ZodObject<{
            chance: z.ZodDefault<z.ZodNumber>;
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            chance: number;
        }, {
            max: number;
            min: number;
            chance?: number | undefined;
        }>>;
        punctuation: z.ZodDefault<z.ZodObject<{
            chance: z.ZodDefault<z.ZodNumber>;
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            chance: number;
        }, {
            max: number;
            min: number;
            chance?: number | undefined;
        }>>;
        termination: z.ZodDefault<z.ZodObject<{
            chance: z.ZodDefault<z.ZodNumber>;
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            chance: number;
        }, {
            max: number;
            min: number;
            chance?: number | undefined;
        }>>;
        cadence: z.ZodDefault<z.ZodObject<{
            chance: z.ZodDefault<z.ZodNumber>;
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            chance: number;
        }, {
            max: number;
            min: number;
            chance?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        all: {
            max: number;
            min: number;
            chance: number;
        };
        complete: {
            max: number;
            min: number;
            chance: number;
        };
        space: {
            max: number;
            min: number;
            chance: number;
        };
        punctuation: {
            max: number;
            min: number;
            chance: number;
        };
        termination: {
            max: number;
            min: number;
            chance: number;
        };
        cadence: {
            max: number;
            min: number;
            chance: number;
        };
    }, {
        all?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        complete?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        space?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        punctuation?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        termination?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        cadence?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    mistakes: {
        chance: number;
        delay: {
            max: number;
            min: number;
            chance: number;
        };
    };
    delays: {
        all: {
            max: number;
            min: number;
            chance: number;
        };
        complete: {
            max: number;
            min: number;
            chance: number;
        };
        space: {
            max: number;
            min: number;
            chance: number;
        };
        punctuation: {
            max: number;
            min: number;
            chance: number;
        };
        termination: {
            max: number;
            min: number;
            chance: number;
        };
        cadence: {
            max: number;
            min: number;
            chance: number;
        };
    };
}, {
    mistakes?: {
        chance?: number | undefined;
        delay?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
    } | undefined;
    delays?: {
        all?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        complete?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        space?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        punctuation?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        termination?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        cadence?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
    } | undefined;
}>;
//# sourceMappingURL=options.d.ts.map