package com.data.typing.services;

import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class Wordsservices {

    Random rand = new Random();

    String[][] raw_words = {
            {
                    "am", "as", "at", "be", "by", "do", "go", "he", "if", "in", "is", "it",
                    "me", "my", "no", "of", "on", "or", "so", "to", "up", "us", "we", "an",
                    "ax", "ex", "id", "ox", "ad", "eh"
            },
            {
                    "ant", "bat", "cat", "dog", "egg", "fan", "gap", "hot", "ice", "jam",
                    "kid", "log", "man", "net", "owl", "pen", "quit", "rat", "sun", "top",
                    "use", "van", "win", "wax", "yes", "zip",

                    "art", "bud", "cow", "dig", "elf", "fog", "gum", "hop", "ink", "jet",
                    "key", "lot", "mud", "nut", "oak", "pit", "quiz", "red", "sip", "tan",
                    "urn", "vex", "web", "yap", "zap",

                    "ape", "bin", "cub", "dip", "ear", "fix", "got", "him", "ice", "job",
                    "kit", "lap", "mix", "nap", "out", "paw", "quip", "run", "sit", "tap",
                    "urn", "vet", "wax", "yak", "zen"
            },
            {
                    "able", "brim", "clap", "dart", "echo", "foil", "gaze", "heap", "idea",
                    "jump", "kite", "lamp", "mask", "nest", "open", "pact", "quiz", "rest",
                    "slap", "trap", "urge", "veto", "whip", "wind", "year", "zone",

                    "ally", "bump", "crop", "dash", "envy", "flap", "grip", "home", "item",
                    "jolt", "king", "luck", "mile", "name", "oval", "pike", "quirk", "roam",
                    "skip", "tune", "unit", "vibe", "wish", "yawn", "zeal",

                    "arch", "blink", "chop", "deal", "edge", "fume", "glow", "halo", "icon",
                    "joke", "knot", "leap", "moth", "node", "opera", "plum", "quote", "rage",
                    "slim", "tilt", "unite", "valor", "waste", "yell", "zest"
            },
            {
                    "apple", "bloom", "charm", "dizzy", "elbow", "fable", "grasp", "happy",
                    "icily", "joker", "kneel", "latch", "mirth", "noble", "orbit", "peace",
                    "quilt", "risky", "slope", "trick", "unity", "vivid", "waltz", "wound",
                    "yield",

                    "angel", "broad", "climb", "drown", "every", "flute", "globe", "hatch",
                    "image", "joint", "knock", "lodge", "magic", "novel", "ocean", "pride",
                    "query", "radar", "spine", "token", "uncle", "viper", "woven", "yacht",
                    "zonal",

                    "adore", "blend", "coral", "dwarf", "eager", "fancy", "grain", "honey",
                    "irony", "jumbo", "kebab", "lemon", "melon", "nudge", "olive", "prism",
                    "quiet", "ruler", "sheep", "tiger", "urban", "video", "wagon", "whale",
                    "youth"
            },
            {
                    "abacus", "breeze", "candle", "damage", "effort", "fabric", "guitar",
                    "hazard", "ignite", "jigsaw", "kernel", "legend", "muffin", "noodle",
                    "outlet", "puzzle", "quench", "rocket", "sunset", "tundra", "unique",
                    "vacuum", "whisky", "yellow", "zipper",

                    "anchor", "bubble", "casino", "defeat", "evolve", "fusion", "goblet",
                    "hunger", "invade", "jungle", "kidnap", "locker", "marble", "napkin",
                    "oracle", "planet", "quartz", "ripple", "subtle", "timber", "utopia",
                    "voyage", "walnut", "yonder", "zigzag",

                    "afloat", "baking", "canyon", "drench", "escape", "fossil", "glisten",
                    "humble", "island", "jumper", "kitten", "lounge", "muscle", "notion",
                    "orange", "pebble", "quiver", "remote", "sprint", "tunnel", "upbeat",
                    "volume", "walrus", "yammer", "zephyr"
            },
            {
                    "abundant", "backbone", "campaign", "daughter", "eclipse", "fabulous", "gardener", "habitats",
                    "identity", "jubilant", "keyboard", "laughter", "magnetic", "navigate", "observer", "pandemic",
                    "quantity", "radiance", "sapphire", "tangible", "umbrella", "vacation", "wanderer", "xylophone",
                    "yearning", "zeppelin", "adaptive", "boundary", "cylinder", "diligent", "evolving", "fortunate",
                    "gracious", "horizon", "inspired", "javelins", "knitting", "luminous", "momentum", "nectarine",
                    "ordinary", "powerful", "question", "resource", "symphony", "treasure", "ultimate", "valuable",
                    "warriors", "xenolith", "yielding", "zealous", "advisory", "blessing", "creative", "dedicate",
                    "elegance", "fidelity", "gigantic", "harmony", "illusion", "juggling", "kinetics", "lightbulb",
                    "memories", "nurtured", "outreach", "playtime", "quirkily", "reliable", "sensible", "traverse",
                    "unifying", "vintage", "whimsical", "xenogene", "yearbook", "zeppelin", "animated", "blizzard",
                    "courtesy", "delicate", "enriched", "festival", "glistens", "heritage", "infinity", "junction",
                    "kaleidoscope", "landscape", "marathon", "narrator", "optimize", "pioneers", "quadrant",
                    "reviving", "stunning", "tropical", "universe", "vitality", "wrestler", "xenogamy", "youngest",
                    "zephyrus"
            }
    };

    public String[][] generatewords(){
        return raw_words;
    }


}
