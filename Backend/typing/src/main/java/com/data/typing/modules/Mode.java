package com.data.typing.modules;

public enum Mode {
    TIME,
    WORDS,
    GAME;

    public static Mode fromCode(int ordinal) {
        if (ordinal < 0 || ordinal >= Mode.values().length) {
            throw new IllegalArgumentException("Invalid mode code: " + ordinal);
        }

        return Mode.values()[ordinal];
    }

}
