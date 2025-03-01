import SectionTitle from "@/components/PageLayout/SectionTitle";
import styles from "@/styles/backup.module.css";

const BackupCard = () => {
    return (
        <section id="backup-chart">
            <div className="container">
                <div className="content">
                    <SectionTitle
                        sectionTitle1="Google Workspace"
                        sectionTitle2="Backup Options"
                        sectionPara="Patronum Backup provides the most complete backup vs older vendor & native tools"
                    />

                    <div className="lg:overflow-hidden overflow-x-scroll">
                        <div className={styles.backupTab}>
                            {/* <!--Table Card 1--> */}
                            <div className={`${styles.backupTabCard} ${styles.tabCard1} fadeLeft`}>
                                <div></div>
                                <div>
                                    <h5>Product &amp; Technology</h5>
                                </div>
                                <div>
                                    <h5>Gmail Backup</h5>
                                </div>
                                <div>
                                    <h5>Google Drive &amp; Shared Drives Backup</h5>
                                </div>
                                <div>
                                    <h5>Other Google Workspace Data Backup</h5>
                                </div>
                                <div>
                                    <h5>Recovery Capabilities</h5>
                                </div>
                            </div>

                            {/* <!--Table Card 2--> */}
                            <div className={`${styles.backupTabCard} ${styles.table1} fadeUp`}>
                                <div className={styles.tabCardRow1}>
                                    <img
                                        src="/assets/features/google-workspace-backup/compare-1.png"
                                        loading="lazy"
                                        alt="Google Admin Logo"
                                    />
                                    <h4>
                                        Google Admin
                                    </h4>
                                </div>
                                <div>
                                    <p>
                                        Standard Google Workspace admin panel lets administrator partially recover deleted Google Workspace data.
                                    </p>
                                </div>
                                <div>
                                    <h5><span className={styles.tabRadioBtn}></span>Limited</h5>
                                    <p>Emails deleted within 20-25 days can be recovered. No versioning is available, only the last known state is restored. Some labels (e.g. Drafts) cannot be restored.</p>
                                </div>
                                <div>
                                    <h5><span className={styles.tabRadioBtn}></span>Limited</h5>
                                    <p>Last state of files deleted within 20-30 days can be recovered. No single file recovery (only all deleted items in a time period).</p>
                                </div>
                                <div>
                                    <h5><span className={styles.tabRadioBtn}></span>Limited</h5>
                                    <p>Last state of Calendars and Contacts can be recovered within 20-30 days after deletion.</p>
                                </div>
                                <div>
                                    <h5><span className={styles.tabRadioBtn}></span>Limited</h5>
                                    <p>Data restored only to the original location. Data you’re not trying to recover will also be replaced, as only bulk restore is possible.</p>
                                </div>
                            </div>

                            {/* <!--Table Card 3--> */}
                            <div className={`${styles.backupTabCard} ${styles.table2} fadeUp`}>
                                <div className={styles.tabCardRow1}>
                                    <img
                                        src="/assets/features/google-workspace-backup/compare-2.png"
                                        loading="lazy"
                                        alt="Google Vault Logo"
                                    />
                                    <h4>
                                        Google Vault
                                    </h4>
                                </div>
                                <div>
                                    <p>
                                        Google Workspace add-on, enables legal hold &amp; partial retention of data relevant for litigation &amp; compliance.
                                    </p>
                                </div>
                                <div>
                                    <h5><span className={`${styles.tabRadioBtn} ${styles.incomplete}`}></span>Incomplete</h5>
                                    <p>Emails can be recovered (with versioning) in MBOX format. Some emails are not retained, label structure is not preserved.</p>
                                </div>
                                <div>
                                    <h5><span className={styles.tabRadioBtn}></span>Limited</h5>
                                    <p>Deleted files are retained, but versioning only available for Google-native files. Directory structures are not restored.</p>
                                </div>
                                <div>
                                    <h5><span className={`${styles.tabRadioBtn} ${styles.incomplete}`}></span>Incomplete</h5>
                                    <p>No versioning for non-Google files, Drive and Shared Drives metadata, Calendars or Contacts.</p>
                                </div>
                                <div>
                                    <h5><span className={styles.tabRadioBtn}></span>Limited</h5>
                                    <p>No restore to Google Workspace, only manual offline export w/o folders &amp; labels. When user is deleted from Google Workspace, all backup data is erased as well.</p>
                                </div>
                            </div>

                            {/* <!--Table Card 4--> */}
                            <div className={`${styles.backupTabCard} ${styles.table3} fadeUp`}>
                                <div className={styles.tabCardRow1}>
                                    <h4>
                                        Legacy Google Workspace Backup
                                    </h4>
                                </div>
                                <div>
                                    <p>
                                        Backup solutions with limitations due to old monolithic architectures developed 7-10 years ago.
                                    </p>
                                </div>
                                <div>
                                    <h5><span className={`${styles.tabRadioBtn} ${styles.partial}`}></span>Partial</h5>
                                    <p>Most vendors don't preserve the nested Gmail labels structure upon backup/restore. For some vendors the backup frequency is limited to 1x/day.</p>
                                </div>
                                <div>
                                    <h5><span className={styles.tabRadioBtn}></span>Limited</h5>
                                    <p>Data &amp; versions are preserved, but files can be silently skipped from backups and the number of retained versions may be limited.</p>
                                </div>
                                <div>
                                    <h5><span className={`${styles.tabRadioBtn} ${styles.partial}`}></span>Partial</h5>
                                    <p>Backup of Google Workspace Contacts and Calendars. Only some vendors backup Google Sites &amp; Chats.</p>
                                </div>
                                <div>
                                    <h5><span className={styles.tabRadioBtn}></span>Limited</h5>
                                    <p>Restore operations can take days and weeks. Export takes time &amp; many steps (request the export link, wait until it's ready, etc).</p>
                                </div>
                            </div>

                            {/* <!--Table Card 5--> */}
                            <div className={`${styles.backupTabCard} ${styles.table4} ${styles.active} fadeUp`}>
                                <div className={styles.tabCardRow1}>
                                    <img
                                        src="/assets/features/google-workspace-backup/compare-p.png"
                                        loading="lazy"
                                        alt="Patronum Logo"
                                    />
                                    <h4>
                                        Patronum Backup
                                    </h4>
                                </div>
                                <div>
                                    <p>
                                        Cloud-native Google Workspace backup service purpose-built for SaaS data protection.
                                    </p>
                                </div>
                                <div>
                                    <h5><span className={`${styles.tabRadioBtn} ${styles.full}`}></span>Full</h5>
                                    <p>Gmail backup with 1-24x daily frequency, preserving nested Gmail label structures, full text search, instant online preview and PST/MBOX/EML export.</p>
                                </div>
                                <div>
                                    <h5><span className={`${styles.tabRadioBtn} ${styles.full}`}></span>Full</h5>
                                    <p>Full fidelity backup (only vendor to backup/recover Drive document IDs), accurate backup of shared files &amp; unlimited versioning.</p>
                                </div>
                                <div>
                                    <h5><span className={`${styles.tabRadioBtn} ${styles.full}`}></span>Full</h5>
                                    <p>Full support of Google Workspace apps and metadata with flexible export (MBOX, PST, EML, VFS, ICS).</p>
                                </div>
                                <div>
                                    <h5><span className={`${styles.tabRadioBtn} ${styles.full}`}></span>Full</h5>
                                    <p>Only solution with full-text search, instant backup preview, in- place/non-destructive restore &amp; offline export via direct download.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BackupCard;